import { LogoIcon } from '@/icons';
import SignInButton from '@/components/sections/Navbar/SignInButton';
import { Section } from '@/components/sections';
import ResponsiveLink from '@/components/sections/Navbar/ResponsiveLink';

function Navbar() {
  return (
    <Section asChild={true}>
      <nav className={'flex items-center justify-between'}>
        <ResponsiveLink />
        <LogoIcon
          width={'48'}
          height={'48'}
          className={'inline-block md:order-1'}
        />
        <SignInButton className={'md:order-3'} />
      </nav>
    </Section>
  );
}

export default Navbar;
