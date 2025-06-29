'use client';

import { useCallback, useSyncExternalStore } from 'react';

type ResourceEntry<T> = {
  data: T | null;
  error: unknown | null;
  promise: Promise<void> | null;
  retryCount: number;
  subscribers: Set<() => void>;
};

const cache = new Map<string, ResourceEntry<unknown>>();

export function useSuspenseListResource<T>(
  key: string,
  fetcher: () => Promise<T>
): {
  data: T;
  retry: () => void;
  retryCount: number;
} {
  const subscribe = (callback: () => void) => {
    let entry = cache.get(key) as ResourceEntry<T> | undefined;
    if (!entry) {
      entry = createEntry<T>(fetcher);
      cache.set(key, entry);
    }
    entry.subscribers.add(callback);
    return () => entry?.subscribers.delete(callback);
  };

  const getSnapshot = (): T => {
    const entry = cache.get(key) as ResourceEntry<T> | undefined;
    if (entry?.error) throw entry.error;
    if (entry?.data) return entry.data;
    if (entry?.promise) throw entry.promise;

    const newEntry = createEntry<T>(fetcher);
    cache.set(key, newEntry);
    throw newEntry.promise;
  };

  const data = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const retry = useCallback(() => {
    const entry = cache.get(key) as ResourceEntry<T> | undefined;
    if (!entry) return;
    entry.retryCount += 1;
    const newEntry = createEntry<T>(fetcher, entry.retryCount);
    cache.set(key, newEntry);
    entry.subscribers.forEach((cb) => cb());
  }, [key, fetcher]);

  const retryCount = cache.get(key)?.retryCount ?? 0;

  return { data, retry, retryCount };
}

function createEntry<T>(
  fetcher: () => Promise<T>,
  retryCount = 0
): ResourceEntry<T> {
  const entry: ResourceEntry<T> = {
    data: null,
    error: null,
    promise: null,
    retryCount,
    subscribers: new Set(),
  };

  entry.promise = fetcher()
    .then((res) => {
      entry.data = res;
      entry.error = null;
      entry.subscribers.forEach((cb) => cb());
    })
    .catch((err) => {
      entry.error = err;
      entry.data = null;
      entry.subscribers.forEach((cb) => cb());
    });

  return entry;
}

// Optional external control

export function retryResource(key: string): void {
  const entry = cache.get(key);
  if (!entry) return;
  const retryCount = entry.retryCount + 1;
  cache.set(
    key,
    createEntry(() => entry.promise!, retryCount)
  ); // assumes promise exists
  entry.subscribers.forEach((cb) => cb());
}

export function getRetryCount(key: string): number {
  return cache.get(key)?.retryCount ?? 0;
}

// ✅ New: Manually set resource data
export function setResourceData<T>(key: string, data: T): void {
  let entry = cache.get(key) as ResourceEntry<T> | undefined;
  if (!entry) {
    entry = {
      data,
      error: null,
      promise: null,
      retryCount: 0,
      subscribers: new Set(),
    };
    cache.set(key, entry);
  } else {
    entry.data = data;
    entry.error = null;
    entry.promise = null;
  }

  entry.subscribers.forEach((cb) => cb());
}

/*
 * Note: After fetching data, persist it in your state manager (e.g., Redux or zustand, Context API),
 * then toggle a boolean flag in useFetcher to clear the temporary cache and free up memory.
 * On subsequent renders, check this flag to decide whether to reuse the stored data or fetch again.
 */
