const Search = ({ search, setSearch }) => {
  return (
    <div className="container my-3 w-50">
    <input
      type="text"
      placeholder="🔍 Search Transactions..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    </div>
  );
};
export default Search;
