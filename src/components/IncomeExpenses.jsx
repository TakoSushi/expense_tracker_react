import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(tr => tr.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = Math.abs(amounts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0))
  .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Приход</h4>
        <p className="money plus" data-testid="money-plus">+ ₽{income}</p>
      </div>
      <div>
        <h4>Траты</h4>
        <p className="money minus" data-testid="money-minus">- ₽{expense}</p>
      </div>
    </div>
  )
}
