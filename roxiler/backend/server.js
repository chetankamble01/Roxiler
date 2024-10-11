const express = require('express');
const connectDB = require('./config/db');
const initRoutes = require('./routes/initRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const statsRoutes = require('./routes/statsRoutes');
const chartRoutes = require('./routes/chartRoutes');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler'); // Updated import

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Optional: for form submissions

// Routes
app.use('/api/initialize', initRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/charts', chartRoutes);

// Handle 404 errors (not found)
app.use(notFoundHandler); // Added not found handler

// Error handling middleware
app.use(errorHandler); // Error handling middleware should come last

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
