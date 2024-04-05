import { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from 'uuid';


export function AddTransaction() {
const [text, setText] = useState('');
const [amount, setAmount] = useState(0);

const { addTransaction } = useContext(GlobalContext);
  
const onSubmit = (e) => {
  e.preventDefault();

  const newTransaction = {
    id: uuidv4(),
    text,
    amount: +amount,
  }

  addTransaction(newTransaction);
}

  return (
    <>
     <h3>Добавить новую транзакцию</h3> 
     <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Текст</label>
        <input
          type="text"
          id="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Сумма
          <br />
          (negative - expense, positive - income)
          </label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="btn">Добавить транзакцию</button>
     </form>
    </>
  )
}
