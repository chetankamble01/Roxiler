// errorHandler.js

const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred' });
};

module.exports = { errorHandler, notFoundHandler };
