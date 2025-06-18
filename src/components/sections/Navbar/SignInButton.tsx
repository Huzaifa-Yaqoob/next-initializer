import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

function SignInButton({ className = '' }: { className?: string }) {
  return (
    <Link
      href={'/auth?form=register'}
      className={cn(buttonVariants({ variant: 'default' }), className)}
    >
      Sign In
    </Link>
  );
}

export default SignInButton;
