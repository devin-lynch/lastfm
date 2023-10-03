export default function User({ username, topArtists }) {
  let displayTopArtists;

  if (topArtists) {
    displayTopArtists = topArtists.map((artist, i) => {
      return (
        // <a target="_blank" href={artist.url} key={i}>
        <a
          target="_blank"
          href={`https://last.fm/user/${username}/library/music/${artist.name}`}
          key={i}
        >
          <div className="mb-8 text-center">
            <p className="text-2xl">{artist.name}</p>
            <p>{artist.playcount} scrobbles</p>
          </div>
        </a>
      );
    });
  } else {
    return <p className="mt-8 text-center text-4xl">loading...</p>;
  }

  return (
    <div>
      <a target="_blank" href={`https://last.fm/user/${username}`}>
        <p className="text-center text-4xl mb-8 mt-4">{username}</p>
      </a>
      <div className="text-center">
        <p className="mb-6 text-xl">Top Artists</p>
        {displayTopArtists}
      </div>
    </div>
  );
}
