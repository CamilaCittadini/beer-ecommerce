# Beer E-Commerce Frontend

A React-based frontend application for a beer e-commerce platform, featuring a Product Listing Page (PLP) and Product Details Page (PDP).

## Features

- **Product Listing Page (PLP)**: Displays all available beer products in a responsive grid layout
- **Product Details Page (PDP)**: Shows detailed product information with:
  - Product images and descriptions
  - Size variant selection (SKU)
  - Real-time stock and price updates (refreshes every 5 seconds)
  - Expandable product descriptions

## Prerequisites

- Node.js (v18 or later recommended)
- npm
- Backend server running (see backend README for setup instructions)

## Installation

1. Navigate to the frontend directory:
   cd frontend
2. Install dependencies:
   npm install
3. Create a .env file in the root directory:
   VITE_API_URL=http://localhost:5001
4. Development mode:
   npm run dev
5. Production build:
   npm run build
6. Preview production build:
   npm run preview

## Routes

1. /products - Product Listing Page (PLP)
2. /product/:slug - Product Details Page (PDP)
   Format: /product/{productId}-{productBrand}
   Example: /product/127-modelo-especial

## API Integration

The frontend communicates with the backend API endpoints:
-GET /api/products - Fetches all products
-GET /api/stock-price/:sku - Fetches stock and price for a specific SKU
Make sure the backend server is running and accessible at the URL specified in VITE_API_URL.

## Technologies Used

-React 19
-React Router 7 - Client-side routing
-React Query (TanStack Query) - Data fetching and caching
-Axios - HTTP client
-SASS - CSS preprocessor
-Vite - Build tool and dev server

## Development Notes

-The application uses React Query for automatic refetching of stock/price data every 5 seconds on the PDP.
-Product images and user image are served from the backend static file server
