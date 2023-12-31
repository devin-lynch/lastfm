'use client';

import Link from 'next/link';
import Artists from '../_interfaces/Artists.interface';

export default function Artist({ artist }: { artist: Artists }) {
  return (
    <div className="mb-8 text-center">
      <Link href={`/artists/${artist.mbid}`}>
        <p className="text-4xl">{artist.name}</p>
        <p>{artist.listeners} listeners</p>
        {/* <div className="flex justify-center">
          <img src={artist.image[3]['#text']} alt={artist.name} />
        </div> */}
      </Link>
    </div>
  );
}
