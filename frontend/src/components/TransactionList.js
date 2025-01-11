import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <h3>{transaction.title}</h3>
            <p>{transaction.description}</p>
            <p>Price: ${transaction.price}</p>
            <p>Sold: {transaction.sold ? 'Yes' : 'No'}</p>
            <p>Date of Sale: {new Date(transaction.dateOfSale).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
