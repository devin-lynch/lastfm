'use client';

import Link from 'next/link';
import Albums from '../_interfaces/Albums.interface';

export default function Album({ album }: { album: Albums }) {
  return (
    <Link href={`/albums/${album.mbid}`}>
      <div>
        <img src={album.image[2]['#text']} alt={album.name} />
      </div>
    </Link>
  );
}
