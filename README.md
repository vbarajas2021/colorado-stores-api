# Colorado Stores API

A RESTful API service for Colorado clothing stores that can be integrated with Bubble.io.

## Features

- Get all stores
- Search stores by city
- Search stores by category
- Get store details by ID
- Geolocation support for store locations

## API Endpoints

### Get All Stores
```
GET /api/stores
```
Returns a list of all stores.

### Search by City
```
GET /api/stores/city/:city
```
Search stores in a specific city. Example:
```
GET /api/stores/city/denver
```

### Search by Category
```
GET /api/stores/category/:category
```
Search stores by category. Example:
```
GET /api/stores/category/vintage
```

### Get Store Details
```
GET /api/stores/:id
```
Get detailed information about a specific store. Example:
```
GET /api/stores/1
```

## Bubble.io Integration

1. In your Bubble.io app:
   - Go to the Data tab
   - Create a new External Service
   - Set the URL to your Render deployment URL
   - Set the Method to GET
   - Add any required parameters

2. Create workflows to:
   - Fetch store data when the page loads
   - Search stores by city or category
   - Display store details
   - Show store locations on a map

## Deployment to Render

1. Sign up for a Render account at https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the service:
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Environment Variables:
     - `PORT`: Set to your desired port
     - `NODE_ENV`: Set to 'production'
   - Auto Deploy: Enable

## Local Development

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

## Development

Run in development mode with auto-reload:
```bash
npm run dev
```

## Adding New Stores

To add new stores, modify the `stores` array in `server.js` and add:
- Unique ID
- Store name and address
- City, state, and zip
- Phone and website
- Categories
- Location coordinates (lat, lng)

## Example Usage

```javascript
// Get all stores
fetch('http://localhost:3000/api/stores')
  .then(response => response.json())
  .then(data => console.log(data));

// Search stores in Denver
fetch('http://localhost:3000/api/stores/city/denver')
  .then(response => response.json())
  .then(data => console.log(data));

// Get store details
fetch('http://localhost:3000/api/stores/1')
  .then(response => response.json())
  .then(data => console.log(data));
```
