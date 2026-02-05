API server for products and stock/price data.

## Prerequisites

- Node.js (v18 or later recommended)
- npm

## Installation

1. Open a terminal and go to the change directory to the backend folder (cd backend)
2. install dependencies by running npm install in the terminal
3. create .env file and add the PORT=5001 variable. Port 5001 will be used by default

## Running the server

1. in development run "npm run dev"
2. in production run "npm start"

## API endpoints

-GET /api/products — Returns the list of all products and their details.
-GET /api/stock-price/:sku — Returns price and stock for a product size-variant by SKU (e.g. /api/stock-price/10041).

Data is read directly from src/data/products.js and src/data/stock-price.js.
