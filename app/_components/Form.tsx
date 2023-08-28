'use client';

type SetArtistSearchType = React.Dispatch<React.SetStateAction<string>>;

interface ChildProps {
  setArtistSearch: SetArtistSearchType;
  handleSubmit: any; // temp fix
}

export default function Form({ setArtistSearch, handleSubmit }: ChildProps) {
  return (
    <div className="text-center mt-8">
      <form>
        <input
          type="text"
          className="search-text"
          placeholder="search artists"
          onChange={(e) => setArtistSearch(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Search</button>
      </form>
    </div>
  );
}
