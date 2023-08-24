'use client';

import { useEffect } from 'react';

export default function Home() {
  const fetchArtists = async () => {
    const response = await fetch('http://localhost:3001/api/get-top-artists', {
      method: 'POST',
      body: JSON.stringify({
        artist: 'Hop Along',
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div>
      <p>last.fm</p>
    </div>
  );
}
