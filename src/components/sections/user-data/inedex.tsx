import { use } from 'react';
import { getUser } from './action';

function UserData() {
  const user = use(getUser());
  return (
    <div>
      <pre>{user?.toString()}</pre>
    </div>
  );
}

export default UserData;
