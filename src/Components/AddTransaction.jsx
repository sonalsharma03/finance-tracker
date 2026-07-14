import { useState, useEffect } from "react";
const AddTransaction = ({
  onAddTransaction,
  onUpdateTransaction,
  editingTransaction,
  setEditingTransaction,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("Expense");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      type,
      date,
    };
    if (editingTransaction) {
      onUpdateTransaction({
        ...editingTransaction,
        title,
        amount: Number(amount),
        category,
        type,
        date,
      });
    } else {
      onAddTransaction(newTransaction);
    }
    setTitle("");
    setAmount("");
    setCategory("Food");
    setType("Expense");
    setDate("");
  };

  useEffect(() => {

    if (editingTransaction) {

      setTitle(editingTransaction.title);
      setAmount(editingTransaction.amount);
      setCategory(editingTransaction.category);
      setType(editingTransaction.type);
      setDate(editingTransaction.date);
    }
  }, [editingTransaction]);

  return (
    <div>
      {" "}
      <h1>Add Your Transaction</h1>
      <input
        type="text"
        placeholder="what did you do"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label>Type</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option className="form-select">Income</option>
        <option>Expense</option>
      </select>
      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Salary</option>
        <option>Shopping</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="button" className="btn btn-info" onClick={handleAdd}>
       ➕Add
       
      </button>
    </div>
  );
};
export default AddTransaction;
