import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>История</h3>
      <ul className='list'>
        {transactions.map(transaction =>
          <Transaction
            transaction={transaction}
            key={transaction.id}
          />
        )}
      </ul>
    </>
  )
}
