import { cookies } from 'next/headers';
import Page from '@/components/common/Page';

async function Public() {
  const cookieStore = await cookies();
  const access = cookieStore.get('accessToken');

  console.log('👉 accessToken cookie:', access);
  // If more cookies exist:
  console.log('All cookies:', cookieStore.getAll());
  return <Page>Page</Page>;
}

export default Public;
