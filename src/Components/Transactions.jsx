import { Transaction } from "./Transaction";
import { useSelector } from "react-redux";

export const Transactions = () => {
  const { transactions } = useSelector((slices) => slices.FormSlice);

  return (
    <div className="transactions">
      All Transactions
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};
