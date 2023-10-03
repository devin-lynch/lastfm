export default function Dropdown({
  searchType,
  handleSearchTypeChange,
}: {
  searchType: string;
  handleSearchTypeChange: any;
}) {
  return (
    <div className="dropdown">
      <label htmlFor="searchType">Search via: </label>

      <select
        name="searchType"
        id="searchType"
        value={searchType}
        onChange={(e) => handleSearchTypeChange(e.target.value)}
      >
        <option value="artists">Artists</option>
        <option value="user">User</option>
        <option value="albums">Albums</option>
      </select>
    </div>
  );
}
