import { useEffect, useState } from 'react';
import User from '@/app/_components/User';

export default function Page() {
  return (
    <div>
      <User user={user} />
    </div>
  );
}
