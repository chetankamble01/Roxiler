const axios = require('axios');
const Transaction = require('../models/Transaction'); // Import your Mongoose model

const initializeDatabase = async (req, res) => {
  try {
    //  data from the third-party API
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data; // Assuming the data is an array of transactions

    // Clear existing data (optional)
    await Transaction.deleteMany({});

    // Insert new data into the database
    await Transaction.insertMany(transactions);

    res.status(200).json({ message: 'Database initialized successfully', count: transactions.length });
  } catch (error) {
    console.error('Error initializing database:', error);
    res.status(500).json({ message: 'Error initializing database' });
  }
};

module.exports = { initializeDatabase };
