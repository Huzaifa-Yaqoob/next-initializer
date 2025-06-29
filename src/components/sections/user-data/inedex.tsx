'use client';

import { Suspense } from 'react';
import UserData from '@/components/sections/user-data/test';

function Dummy() {
  return (
    <div>
      <Suspense fallback={'loading...1'}>
        <UserData />
      </Suspense>
    </div>
  );
}

export default Dummy;
