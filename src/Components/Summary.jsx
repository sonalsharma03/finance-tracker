const Summary = ({ transactions }) => {
  const incomeTransactions = transactions.filter((transaction) => {
    return transaction.type === "Income";
  });

  const totalIncome = incomeTransactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);

  const expenseTransactions = transactions.filter((transaction) => {
    return transaction.type === "Expense";
  });

  const totalExpense = expenseTransactions.reduce((total, transaction) => {
return total + transaction.amount;
  }, 0);

  const balance = totalIncome - totalExpense ;

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center g-3">
          <div className="col-md-4">
            <div className="card text-bg-primary">
              <div className="card-body text-center">
                <h5 className="card-title">💰 Balance</h5>
                <p className="card-text fs-4">₹ {balance}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-success">
              <div className="card-body text center">
                <h5 className="card-title">
🟢 Income</h5>
                <p className="card-text fs-4">₹{totalIncome}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-danger">
              <div className="card-body text-center">
                <h5 className="card-title">
🔴 Expense</h5>
                <p className="card-text fs-4">₹{totalExpense}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Summary;
