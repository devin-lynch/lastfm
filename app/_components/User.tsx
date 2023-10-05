import TopArtists from '../_interfaces/TopArtists.interface';

export default function User({
  username,
  topArtists,
  topAlbums,
}: {
  username: string;
  topArtists: any; // fix typing
  topAlbums: any; // fix typing
}) {
  let displayTopArtists;
  let displayTopAlbums;

  if (topArtists) {
    displayTopArtists = topArtists.map((artist: any, i: any) => {
      // fix typing
      return (
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

  if (topAlbums) {
    displayTopAlbums = topAlbums.map((album: any, i: any) => {
      return (
        <a
          target="_blank"
          href={`https://last.fm/user/${username}/library/music/${album.artist.name}/${album.name}`}
          key={i}
        >
          <div className="mb-8 text-center flex">
            <div>
              <p className="text-2xl">{album.name}</p>
              <p className="text-xl">{album.artist.name}</p>
              <p>{album.playcount} scrobbles</p>
            </div>
            <img src={album.image[2]['#text']} alt={album.name} />
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
      <div className="flex">
        <div className="text-center">
          <p className="mb-6 text-xl">Top Artists</p>
          {displayTopArtists}
        </div>
        <div className="text-center">
          <p className="mb-6 text-xl">Top Albums</p>
          {displayTopAlbums}
        </div>
      </div>
    </div>
  );
}
