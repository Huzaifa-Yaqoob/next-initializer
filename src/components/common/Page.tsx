import { ReactNode } from 'react';

// code files
import { cn } from '@/lib/utils';

function Page({
  className = '',
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn('flex-grow space-y-8', className)}>{children}</div>;
}

export default Page;
