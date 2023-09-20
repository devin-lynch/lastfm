import Link from 'next/link';

export default function User({ username, topArtists }) {
  let displayTopArtists;

  if (topArtists) {
    displayTopArtists = topArtists.map((artist, i) => {
      return (
        <Link href={artist.url} key={i}>
          <div className="mb-8 text-center">
            <p className="text-2xl">{artist.name}</p>
            <p>{artist.playcount} scrobbles</p>
          </div>
        </Link>
      );
    });
  }

  return (
    <div>
      <Link href={`https://last.fm/user/${username}`}>
        <p className="text-center text-4xl mb-8 mt-4">{username}</p>
      </Link>
      <div className="text-center">
        <p className="mb-6 text-xl">Top Artists</p>
        {displayTopArtists}
      </div>
    </div>
  );
}
