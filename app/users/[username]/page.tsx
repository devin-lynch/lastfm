'use client';

import { useEffect, useState, useContext } from 'react';
import User from '@/app/_components/User';

export default function Page({ params }: { params: { username: string } }) {
  const [userTopArtists, setUserTopArtists] = useState();

  const getUserTopArtists = async () => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/get-user-artists',
        {
          method: 'POST',
          body: JSON.stringify({
            user: params.username,
          }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const buildUserTopArtists = async () => {
    let builtUserTopArtists = await getUserTopArtists();
    console.log(builtUserTopArtists);
    setUserTopArtists(builtUserTopArtists);
  };

  useEffect(() => {
    buildUserTopArtists();
  }, []);

  return (
    <div>
      <User username={params.username} topArtists={userTopArtists} />
    </div>
  );
}

// get logic in custom hook
