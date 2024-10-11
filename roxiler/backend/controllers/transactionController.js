const getTransactions = async (req, res) => {
  const { month } = req.query;
  // Logic to  transactions based on month, search, and pagination
  res.status(200).json({ transactions: [] }); // Replace with actual data
};

module.exports = { getTransactions };
