import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}<span>{sign} ₽{Math.abs(transaction.amount)}</span>
      <button
        data-testid="delete-btn"
        className='delete-btn'
        onClick={() => deleteTransaction(transaction.id)}
      >x</button>
    </li>
  );
}
