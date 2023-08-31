'use client';

import { useEffect, useState } from 'react';
import Album from '@/app/_interfaces/Album.interface';

export default function Page({ params }: { params: { mbid: number } }) {
  const [album, setAlbum] = useState<Album>();

  const fetchAlbum = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/get-album`, {
        method: 'POST',
        body: JSON.stringify({
          id: params.mbid,
        }),
      });
      const data = await response.json();
      console.log('ALBUM: ', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const buildAlbum = async () => {
    let builtAlbum = await fetchAlbum();
    setAlbum(builtAlbum);
  };

  useEffect(() => {
    buildAlbum();
  }, []);

  return (
    <div>
      <p>Album</p>
    </div>
  );
}
