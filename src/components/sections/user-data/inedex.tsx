'use client';
import { useEffect, useState } from 'react';
import { getUser } from './action';

function UserData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((res) => setUser(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default UserData;
