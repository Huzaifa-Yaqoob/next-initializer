import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

function FormFooter({
  preText,
  btnText,
  href,
}: {
  preText: string;
  btnText: string;
  href: string;
}) {
  return (
    <span>
      {preText}
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: 'link' }),
          'm-0 ml-1 p-0 text-base'
        )}
      >
        {btnText}
      </Link>
    </span>
  );
}

export default FormFooter;
