import {PieChart, Pie, Cell, Tooltip, Legend,} from "recharts";

const ExpensePieChart = ({ transactions}) => {

        const income = transactions 
        .filter((transaction) => transaction.type === "Income")
    .reduce((total, transaction) => total + transaction.amount, 0);

       const expense = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((total, transaction) => total + transaction.amount,0);

    const data = [
        {name: "Income", value:income},
        {name: "expense", value:expense},

    ];

    return (
    <PieChart width={400} height={300}>
        <Pie data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
      outerRadius={100}
      label
      >
        <Cell fill="#28a745" />
         <Cell fill="#dc3545" />
        </Pie>
        <Tooltip/>
        <Legend/>

    </PieChart>
    
    );
}
export default ExpensePieChart;