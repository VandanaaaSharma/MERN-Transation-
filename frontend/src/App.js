import React, { useState, useEffect } from 'react';
import './app.css';
import TransactionList from './components/TransactionList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTransactions();
  }, [search, page]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/transactions?search=${search}&page=${page}&limit=10`
      );
      const data = await response.json();
      setTransactions(data);
      // Assuming your backend returns the total number of pages.
      setTotalPages(Math.ceil(data.length / 10)); // Example logic
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
   };

  return (
    <div className="App">
      <h1>Product Transactions</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <TransactionList transactions={transactions} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default App;
