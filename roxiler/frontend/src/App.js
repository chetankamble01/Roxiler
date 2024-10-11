import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Assuming you have the CSS styles in this file

function App() {
  const [month, setMonth] = useState('March');
  const [transactions, setTransactions] = useState([]);
  const [stats, setStats] = useState({});
  const [barChart, setBarChart] = useState([]);
  const [pieChart, setPieChart] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    Transactions();
    Statistics();
    BarChartData();
    PieChartData();
  }, [month, page, search]);

  const Transactions = async () => {
    const { data } = await axios.get('/transactions', {
      params: { month, page, search }
    });
    setTransactions(data.transactions);
  };

  const Statistics = async () => {
    const { data } = await axios.get('/statistics', { params: { month } });
    setStats(data);
  };

  const BarChartData = async () => {
    const { data } = await axios.get('/bar-chart', { params: { month } });
    setBarChart(data);
  };

  const PieChartData = async () => {
    const { data } = await axios.get('/pie-chart', { params: { month } });
    setPieChart(data);
  };

  return (
    <div className="App">
      <h1>Transaction Dashboard</h1>
      
      <label>Select Month:</label>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        {months.map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <h2>Transactions</h2>
      <input
        type="text"
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx._id}>
              <td>{tx.title}</td>
              <td>{tx.description}</td>
              <td>{tx.price.toFixed(2)}</td> {/* Formatting price */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>

      <div className="stats-container">
        <h2>Statistics</h2>
        <div className="stat-box">
          <p>Total Sale Amount: <strong>{stats.totalAmount?.toFixed(2)}</strong></p>
          <p>Total Sold Items: <strong>{stats.totalSoldItems}</strong></p>
          <p>Total Unsold Items: <strong>{stats.totalUnsoldItems}</strong></p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-box">
          <h2>Bar Chart</h2>
          {/* Implement bar chart here using a charting library */}
        </div>
        <div className="chart-box">
          <h2>Pie Chart</h2>
          {/* Implement pie chart here using a charting library */}
        </div>
      </div>
    </div>
  );
}

export default App;
