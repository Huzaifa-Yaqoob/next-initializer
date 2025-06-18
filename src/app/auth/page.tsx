import { Register, LogIn, FormFooter } from '@/components/forms/auth';
import { H1 } from '@/components/ui/bloom/typography';
import Page from '@/components/common/Page';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function Auth(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const { form } = searchParams;
  const isRegister = form === 'register';
  return (
    <Page className={'flex justify-center'}>
      <section className="m-auto">
        <div className="flex w-[340px] flex-col items-center justify-center space-y-8 md:w-[500px]">
          <H1>{isRegister ? 'Register' : 'Log In'}</H1>
          {isRegister ? <Register /> : <LogIn />}
          <FormFooter
            preText={
              isRegister ? 'Already have an account?' : "Don't have an account?"
            }
            btnText={isRegister ? 'Log In' : 'Register'}
            href={isRegister ? '/auth?form=login' : '/auth?form=register'}
          />
        </div>
      </section>
    </Page>
  );
}

export default Auth;
