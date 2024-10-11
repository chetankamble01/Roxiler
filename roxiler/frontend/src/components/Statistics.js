import React from 'react';

const Statistics = ({ stats }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Sale Amount: ${stats.totalAmount || 0}</p>
      <p>Total Sold Items: {stats.totalSoldItems || 0}</p>
      <p>Total Not Sold Items: {stats.totalNotSoldItems || 0}</p>
    </div>
  );
};

export default Statistics;
