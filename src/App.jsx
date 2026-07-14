import Header from "./Components/Header";
import AddTransaction from "./Components/AddTransaction";
import Summary from "./Components/Summary";
import TransactionList from "./Components/TransactionList";
import { useState , useEffect} from "react";
import Search from "./Components/Search";
import Filter from "./Components/Filter";
import Sort from "./Components/Sort";
import ExpensePieChart from "./Components/ExpensePieChart";
import './App.css';
function App() {
const [transactions, setTransactions] = useState(() => {
  const savedTransactions = localStorage.getItem("transactions");

  if (savedTransactions) {
    return JSON.parse(savedTransactions);
  }

  return [
    {
      id: 1,
      title: "Pizza",
      amount: 350,
      category: "Food",
      type: "Expense",
      date: "11 Jul 2026",
    },
    {
      id: 2,
      title: "Salary",
      amount: 25000,
      category: "Salary",
      type: "Income",
      date: "10 Jul 2026",
    },
  ];
});

useEffect(() => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}, [transactions]);
 


  const onAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const onDeleteTransaction = (id) => {
    const updatedTransaction = transactions.filter(
      (transaction) => transaction.id !== id,
    );
    setTransactions(updatedTransaction);
  };

  const [editingTransaction, setEditingTransaction] = useState(null);
  const onEditTransaction = (transaction) => {
    console.log("edit clicked", transaction);
    setEditingTransaction(transaction);
  };

  const onUpdateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction,
      ),
    );
    setEditingTransaction(null);
  };

  const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
             .toLowerCase().includes(search.toLowerCase());
  const matchesFilter = filter === "All" || transaction.type === filter;

  return matchesSearch && matchesFilter;
  });

  const [sortBy, setSortBy] = useState("Newest");

  const sortedTransactions = [...filteredTransactions];

if (sortBy === "Newest") {
  sortedTransactions.sort((a, b) => b.id - a.id);
} else if (sortBy === "Oldest") {
  sortedTransactions.sort((a, b) => a.id - b.id);
} else if (sortBy === "Highest Amount") {
  sortedTransactions.sort((a, b) => b.amount - a.amount);
} else if (sortBy === "Lowest Amount") {
  sortedTransactions.sort((a, b) => a.amount - b.amount);
}
  return (
    <center>
      <Header />
      <Search
      search={search}
      setSearch={setSearch}/>
      <Filter filter={filter}
      setFilter={setFilter} />
      <Sort sortBy={sortBy}
      setSortBy={setSortBy}/>
      <AddTransaction
        onAddTransaction={onAddTransaction}
        editingTransaction={editingTransaction}
        setEditingTransaction={setEditingTransaction}
        onUpdateTransaction={onUpdateTransaction}
      />
      <Summary transactions={transactions} />
      <ExpensePieChart transactions={transactions}/>
      <TransactionList
        onDelete={onDeleteTransaction}
        onEdit={onEditTransaction}
        transactions={sortedTransactions}
  
      />
    </center>
  );
}

export default App;
