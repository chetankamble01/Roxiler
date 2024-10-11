const getStatistics = async (req, res) => {
  const { month } = req.query;
  // Logic to calculate statistics for the selected month
  res.status(200).json({ totalSales: 0, totalSoldItems: 0, totalNotSoldItems: 0 }); // Replace with actual data
};

module.exports = { getStatistics };
