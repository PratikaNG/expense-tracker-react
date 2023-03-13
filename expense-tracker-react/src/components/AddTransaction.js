import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <form id="form">
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        ></input>
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount (negative - expense, positive - income)
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.amount)}
          placeholder="Enter amount..."
        ></input>
      </div>
      <button className="btn">Add transaction</button>
    </form>
  );
};

export default AddTransaction;
