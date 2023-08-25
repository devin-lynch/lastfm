'use client';

export default function Form({ setArtistSearch, handleSubmit }) {
  return (
    <form>
      <input
        type="text"
        className="search-text"
        placeholder="search artists"
        onChange={(e) => setArtistSearch(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Search</button>
    </form>
  );
}
