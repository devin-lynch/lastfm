'use client';

import { useState, useEffect } from 'react';
import Artist from './_components/Artist';

export default function Home() {
  const [artists, setArtists] = useState([]);

  const fetchArtists = async () => {
    const response = await fetch('http://localhost:3000/api/get-artists', {
      method: 'POST',
      body: JSON.stringify({
        artist: 'Hop Along',
      }),
    });
    const data = await response.json();
    setArtists(data);
  };

  useEffect(() => {
    fetchArtists();
    console.log('ARTISTS', artists);
  }, []);

  const displayArtists = artists.map((artist, i) => {
    if (artists) {
      return (
        <div key={i}>
          <Artist artist={artist} />
        </div>
      );
    }
  });

  return <div>{displayArtists}</div>;
}
