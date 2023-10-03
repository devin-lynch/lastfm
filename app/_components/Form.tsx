'use client';

type SetArtistSearchType = React.Dispatch<React.SetStateAction<string>>;
type SetUserSearchType = React.Dispatch<React.SetStateAction<string>>;

interface ChildProps {
  setArtistSearch: SetArtistSearchType;
  handleArtistSubmit: any; // temp fix
  setUserSearch: SetUserSearchType;
  // handleUserSubmit: any; // temp fix
  userSearch: string;
}

export default function Form({
  setArtistSearch,
  handleArtistSubmit,
  setUserSearch,
  // handleUserSubmit,
  userSearch,
}: ChildProps) {
  return (
    <div className="text-center mt-8">
      {/* <input
        type="text"
        className="search-text"
        placeholder="search artists"
        onChange={(e) => setArtistSearch(e.target.value)}
      />
      <button onClick={(e) => handleArtistSubmit(e)}>Search</button> */}
      {/* <button onClick={(e) => handleSubmit(e)}>Search</button> */}

      <input
        type="text"
        className="search-text"
        placeholder="look up a user"
        onChange={(e) => setUserSearch(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => (window.location.href = `users/${userSearch}`)}
      >
        Search
      </button>
    </div>
  );
}
