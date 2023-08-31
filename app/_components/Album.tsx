'use client';

import Albums from '../_interfaces/Albums.interface';

export default function Album({ album }: { album: Albums }) {
  return (
    <a href={`/albums/${album.mbid}`}>
      <div>
        <img src={album.image[2]['#text']} alt={album.name} />
      </div>
    </a>
  );
}
