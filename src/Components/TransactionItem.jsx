import styles from './TransactionItem.module.css';
const TransactionItem = ({ transaction, onDelete, onEdit }) => {
  return (
    <>
      <div className={`card ${styles.transactionCard}`}>
        <div className="card-body">
            <h5 className="card-title">{transaction.title}</h5>
          <p>
            <strong>Amount:</strong> ₹{transaction.amount}
          </p>
          <p>
            <strong>Category:</strong> {transaction.category}
          </p>
          <p>
            <strong>Type:</strong> {transaction.type}
          </p>
          <p>
            <strong>Date:</strong> {transaction.date}
          </p>
          <button type="button" className="btn btn-primary" onClick={() => onEdit(transaction)}>
            Edit
          </button>
          <button type="button" className="btn btn-danger" onClick={() => onDelete(transaction.id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default TransactionItem;
