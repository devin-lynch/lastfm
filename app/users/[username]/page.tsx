'use client';

import { useEffect, useState, useContext } from 'react';
import User from '@/app/_components/User';

export default function Page({ params }: { params: { username: string } }) {
  const [userTopArtists, setUserTopArtists] = useState();
  const [userExists, setUserExists] = useState(true); // default assumption will be that the user exists until we get a response from the API that demonstrates otherwise

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
    let apiResponse = await getUserTopArtists();
    console.log(apiResponse);
    if (apiResponse === 'no data') {
      setUserExists(false);
    } else {
      setUserTopArtists(apiResponse);
    }
  };

  useEffect(() => {
    buildUserTopArtists();
  }, []);

  return (
    <div>
      {userExists ? (
        <User username={params.username} topArtists={userTopArtists} />
      ) : (
        <p>user not found</p>
      )}
    </div>
  );
}

// get logic in custom hook
