'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/components/sections/Navbar/data';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const activeClassStyles = 'text-primary font-bold';

function Links() {
  const pathname = usePathname();

  function activeClass(path: string) {
    return path === pathname ? activeClassStyles : '';
  }

  return (
    <div>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={cn(
            buttonVariants({ variant: 'link' }),
            activeClass(link.path)
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default Links;
