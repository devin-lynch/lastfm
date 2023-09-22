export default function Dropdown() {
  return (
    <div className="dropdown">
      <label htmlFor="searchType">Search via: </label>

      <select
        name="searchType"
        id="searchType"
        value=""
        onChange={(e) => e.target.value}
      >
        <option value="artists">Artists</option>
        <option value="user">User</option>
        <option value="albums">Albums</option>
      </select>
    </div>
  );
}
