'use client';

type SetArtistSearchType = React.Dispatch<React.SetStateAction<string>>;
type SetUserSearchType = React.Dispatch<React.SetStateAction<string>>;

interface ChildProps {
  setArtistSearch: SetArtistSearchType;
  handleArtistSubmit: any; // temp fix
  setUserSearch: SetUserSearchType;
  handleUserSubmit: any; // temp fix
}

export default function Form({
  setArtistSearch,
  handleArtistSubmit,
  setUserSearch,
  handleUserSubmit,
}: ChildProps) {
  return (
    <div className="text-center mt-8">
      <form>
        <input
          type="text"
          className="search-text"
          placeholder="search artists"
          onChange={(e) => setArtistSearch(e.target.value)}
        />
        <button onClick={(e) => handleArtistSubmit(e)}>Search</button>
      </form>

      <form>
        <input
          type="text"
          className="search-text"
          placeholder="search users"
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <button onClick={(e) => handleUserSubmit(e)}>Search</button>
      </form>
    </div>
  );
}
