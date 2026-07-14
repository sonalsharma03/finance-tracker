
const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <select 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="form-select"
      >
        <option>All</option>
        <option>Income</option>
        <option>Expense</option>
      </select>
    </div>
  );
};

export default Filter;
