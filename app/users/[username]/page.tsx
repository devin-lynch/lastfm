import { useEffect, useState, useContext } from 'react';
import { UserContext } from '@/app/_context/UserContext';
import User from '@/app/_components/User';

export default function Page() {
  const user = useContext(UserContext);

  return (
    <div>
      <User user={user} />
    </div>
  );
}
