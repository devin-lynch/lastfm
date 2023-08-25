'use client';

import Artists from '../_interfaces/Artists.interface';

export default function Artist({ artist }: { artist: Artists }) {
  return (
    <div className="mb-8 text-center">
      <a href={`/artists/${artist.mbid}`}>
        <p>{artist.name}</p>
        <p>{artist.listeners} listeners</p>
        <div className="flex justify-center">
          <img src={artist.image[3]['#text']} alt={artist.name} />
        </div>
      </a>
    </div>
  );
}
