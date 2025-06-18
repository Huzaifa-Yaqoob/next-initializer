import { ComponentProps } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { LoadIcon } from '@/icons';
import type { VariantProps } from 'class-variance-authority';

function SubmitButton({
  isLoading,
  children,
  type,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading: boolean;
  }) {
  return (
    <Button type={type || 'submit'} {...props}>
      {isLoading && <LoadIcon className={'animate-spin'} />}
      {children}
    </Button>
  );
}

export default SubmitButton;
