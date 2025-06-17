import { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

function Section({
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
      className={cn('w-full px-4 py-2 sm:px-6 md:px-8 lg:py-4', className)}
    >
      {children}
    </Comp>
  );
}

export default Section;
