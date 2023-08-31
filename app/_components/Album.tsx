'use client';

import Album from '../_interfaces/Album.interface';

export default function Album({ album }: { album: Album }) {
  return (
    <a href={`/albums/${album.mbid}`}>
      <div>
        <img src={album.image[2]['#text']} alt={album.name} />
      </div>
    </a>
  );
}
