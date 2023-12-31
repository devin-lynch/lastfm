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

  const displayAlbumInfo = album ? (
    <div className="text-center mt-8">
      <a href={album.url}>
        <div className="flex justify-center">
          <img src={album.image[3]['#text']} alt={album.name} />
        </div>
      </a>
      <p className="mt-4 text-4xl">{album.name}</p>
      <p className="mt-4">{album.listeners} listeners</p>
      <p>{album.playcount} plays</p>
      <p className="mt-4">{album.wiki.content}</p>
    </div>
  ) : null;

  return <div>{displayAlbumInfo}</div>;
}
