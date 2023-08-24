'use client';

export default function Artist({ artist }) {
  return (
    <div className="mb-8 text-center">
      <p>{artist.name}</p>
      <p>Listeners: {artist.listeners}</p>
      <div className="flex justify-center">
        <img src={artist.image[3]['#text']} alt={artist.name} />
      </div>
    </div>
  );
}
