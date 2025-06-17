import { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

function Index({
  asChild = false,
  className = '',
  children,
  ...props
}: ComponentProps<'section'> & {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const Comp = asChild ? Slot : 'section';
  return (
    <Comp
      {...props}
      className={cn('w-full bg-green-500 px-4 py-8 sm:px-6 md:px-8', className)}
    >
      {children}
    </Comp>
  );
}

export default Index;
