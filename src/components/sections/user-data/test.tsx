'use client';

import { useSuspenseListResource } from '@/hooks/useFetcher';
import { getUser } from '@/components/sections/user-data/action';

export default function UserData() {
  const { data: user } = useSuspenseListResource<unknown>('user', getUser);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
