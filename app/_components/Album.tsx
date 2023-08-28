'use client';

import Album from '../_interfaces/Album.interface';

export default function Album({ album }: { album: Album }) {
  return (
    <div>
      <img src={album.image[2]['#text']} alt={album.name} />
    </div>
  );
}
