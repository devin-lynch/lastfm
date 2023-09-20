import Link from 'next/link';

export default function User({ username, topArtists }) {
  let displayTopArtists;

  if (topArtists) {
    displayTopArtists = topArtists.map((artist, i) => {
      return (
        <Link href={artist.url} key={i}>
          <div>
            <p>{artist.name}</p>
            <p>{artist.playcount}</p>
          </div>
        </Link>
      );
    });
  }

  return (
    <div>
      <p>{username}</p>
      {displayTopArtists}
    </div>
  );
}
