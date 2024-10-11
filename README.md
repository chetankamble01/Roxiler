

## Overview
This project is a  application that fetches product transaction data from a third-party API and provides various endpoints for managing and analyzing that data.

## Setup
1. Clone the repository.
2. Run `npm install` in both the backend and frontend directories.
3. Start the servers with `npm start`.

## API Endpoints
- **Initialize DB**: `GET /api/init`
- **List Transactions**: `GET /api/transactions?month={month}&page={page}&perPage={perPage}&search={text}`
- **Statistics**: `GET /api/statistics?month={month}`
- **Bar Chart Data**: `GET /api/bar-chart?month={month}`
- **Pie Chart Data**: `GET /api/pie-chart?month={month}`
- **Combined Data**: `GET /api/combined?month={month}`

## Data Source
- **API URL**: [Product Transactions](https://s3.amazonaws.com/roxiler.com/product_transaction.json)

## Technologies Used
- Node.js, Express, MongoDB, React, Axios, Chart.js

## License
Open-source under the MIT License.
