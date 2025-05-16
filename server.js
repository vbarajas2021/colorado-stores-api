const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

// Enable CORS
app.use(cors());
app.use(express.json());

// Add logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Not found handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Sample store data
const stores = [
  {
    id: "1",
    name: "Denver Vintage Co.",
    address: "1234 Broadway",
    city: "Denver",
    state: "CO",
    zip: "80203",
    phone: "(303) 555-1234",
    website: "https://denvervintage.com",
    categories: ["Vintage", "Women's", "Men's"],
    location: {
      lat: 39.7392,
      lng: -104.9903
    }
  },
  {
    id: "2",
    name: "Boulder Outfitters",
    address: "567 Pearl St",
    city: "Boulder",
    state: "CO",
    zip: "80302",
    phone: "(303) 555-5678",
    website: "https://boulderoutfitters.com",
    categories: ["Outdoor", "Men's", "Women's"],
    location: {
      lat: 40.0150,
      lng: -105.2705
    }
  },
  {
    id: "3",
    name: "Springfield Fashion",
    address: "789 Tejon St",
    city: "Colorado Springs",
    state: "CO",
    zip: "80903",
    phone: "(719) 555-9012",
    website: "https://springfieldfashion.com",
    categories: ["Contemporary", "Women's", "Accessories"],
    location: {
      lat: 38.8339,
      lng: -104.8214
    }
  },
  {
    id: "4",
    name: "Fort Collins Style",
    address: "101 College Ave",
    city: "Fort Collins",
    state: "CO",
    zip: "80524",
    phone: "(970) 555-3456",
    website: "https://fortcollinsstyle.com",
    categories: ["Casual", "Women's", "Men's"],
    location: {
      lat: 40.5853,
      lng: -105.0844
    }
  }
];

// API endpoints

// Get all stores
app.get('/api/stores', (req, res) => {
  res.json(stores);
});

// Search stores by city
app.get('/api/stores/city/:city', (req, res) => {
  const city = req.params.city.toLowerCase();
  const filteredStores = stores.filter(store => 
    store.city.toLowerCase() === city
  );
  res.json(filteredStores);
});

// Search stores by category
app.get('/api/stores/category/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const filteredStores = stores.filter(store => 
    store.categories.some(cat => cat.toLowerCase() === category)
  );
  res.json(filteredStores);
});

// Get store by ID
app.get('/api/stores/:id', (req, res) => {
  const store = stores.find(s => s.id === req.params.id);
  if (store) {
    res.json(store);
  } else {
    res.status(404).json({ message: 'Store not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
