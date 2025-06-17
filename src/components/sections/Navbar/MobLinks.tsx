'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// code files
import { cn } from '@/lib/utils';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { MenuIcon } from '@/icons';
import { buttonVariants } from '@/components/ui/button';
import { navLinks } from '@/components/sections/Navbar/data';

function MobLinks({ isMobile }: { isMobile: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(isMobile);
    }
  }, [isMobile]);

  function activeVarient(path: string) {
    return path === pathname ? 'default' : 'outline';
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction={'left'}>
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Title</DrawerTitle>
        </DrawerHeader>
        <div className={'space-y-4 px-4'}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                buttonVariants({ variant: activeVarient(link.path) }),
                'block'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default MobLinks;
