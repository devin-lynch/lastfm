'use client';

import { useEffect, useState } from 'react';
import Artist from '@/app/_interfaces/Artist.interface';

export default function Page({ params }: { params: { mbid: number } }) {
  const [artist, setArtist] = useState<Artist>();
  const [artistAlbums, setArtistAlbums] = useState();

  const fetchArtist = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/get-artist`, {
        method: 'POST',
        body: JSON.stringify({
          id: params.mbid,
        }),
      });
      const data = await response.json();
      console.log('ARTIST: ', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const buildArtist = async () => {
    let builtArtist = await fetchArtist();
    setArtist(builtArtist);
  };

  useEffect(() => {
    buildArtist();
  }, []);

  const fetchArtistAlbums = async () => {
    if (artist) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/get-artist-albums`,
          {
            method: 'POST',
            body: JSON.stringify({
              artist: artist.name,
            }),
          }
        );
        const data = await response.json();
        console.log('ARTIST ALBUMS: ', data);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const buildArtistAlbums = async () => {
    let builtArtistAlbums = await fetchArtistAlbums();
    setArtistAlbums(builtArtistAlbums);
  };

  useEffect(() => {
    buildArtistAlbums();
  }, [artist]);

  const displayArtistInfo = artist ? (
    <div className="text-center mt-8">
      <a href={artist.url} className="text-4xl" target="_blank">
        {artist.name}
      </a>
      <p className="text-xl mt-4">{artist.stats.listeners} listeners</p>
      <p className="text-xl">{artist.stats.playcount} plays</p>
      <p className="mt-4">{artist.bio.content}</p>
    </div>
  ) : null;

  return <div>{displayArtistInfo}</div>;
}
