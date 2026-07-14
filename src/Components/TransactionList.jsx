import TransactionItem from "./TransactionItem";

const TransactionList = ( { transactions, onDelete, onEdit }) => {
  return (
    <div className="container mt-4">
      <h2>Recent Transactions</h2>

      {transactions.map((transaction) => {
         return <TransactionItem
         key={transaction.id}
         transaction={transaction}
         onDelete={onDelete}
         onEdit={onEdit}/>
      })}
    </div>
  );
};
export default TransactionList;
