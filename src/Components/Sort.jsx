const Sort = ({ sortBy, setSortBy }) => {
  return (
    <div className="container my-3 w-50">
      <select
        className="form-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option>Newest</option>
        <option>Oldest</option>
        <option>Highest Amount</option>
        <option>Lowest Amount</option>
      </select>
    </div>
  );
};

export default Sort;