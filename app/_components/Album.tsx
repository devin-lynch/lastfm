'use client';

export default function Album({ album }) {
  return (
    <div>
      <img src={album.image[2]['#text']} alt={album.name} />
    </div>
  );
}
