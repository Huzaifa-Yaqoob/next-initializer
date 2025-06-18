'use client';

import Links from '@/components/sections/Navbar/Links';
import MobLinks from '@/components/sections/Navbar/MobLinks';
import { useWindowWidth, BreakPoints } from '@/hooks/useWindowWidth';

function ResponsiveLink() {
  const width = useWindowWidth();

  return (
    <div className={'md:order-2'}>
      {width && width < BreakPoints.md ? (
        <MobLinks isMobile={!!(width && width < BreakPoints.md)} />
      ) : (
        <Links />
      )}
    </div>
  );
}

export default ResponsiveLink;
