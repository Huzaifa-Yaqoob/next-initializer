// code files
import { LogoIcon } from '@/icons';
import Links from '@/components/sections/Navbar/Links';
import SignInButton from '@/components/sections/Navbar/SignInButton';
import Section from '@/components/sections';

function Navbar() {
  return (
    <Section asChild={true}>
      <nav className={'flex items-center justify-between'}>
        <LogoIcon className={'inline-block'} width={'48'} height={'48'} />
        <Links />
        <SignInButton />
      </nav>
    </Section>
  );
}

export default Navbar;
