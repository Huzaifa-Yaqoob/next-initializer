import Link from 'next/link';

// code files
import { buttonVariants } from '@/components/ui/button';

function SignInButton() {
  return (
    <Link
      href={'/auth?form=register'}
      className={buttonVariants({ variant: 'default' })}
    >
      Sign In
    </Link>
  );
}

export default SignInButton;
