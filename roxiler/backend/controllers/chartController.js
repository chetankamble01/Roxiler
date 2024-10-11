const getBarChartData = async (req, res) => {
  const { month } = req.query;
  // Logic to  bar chart data
  res.status(200).json({ data: [] }); // Replace with actual data
};

const getPieChartData = async (req, res) => {
  const { month } = req.query;
  // Logic to  pie chart data
  res.status(200).json({ data: [] }); // Replace with actual data
};

module.exports = { getBarChartData, getPieChartData };
