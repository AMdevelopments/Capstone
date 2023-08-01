// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static assets
app.use('/images', express.static(path.join(__dirname, 'images')));

// Read the content.json, menu.json, and specials.json files
let contentData = JSON.parse(fs.readFileSync(path.join(__dirname, 'json', 'content.json'), 'utf8'));
let menuData = JSON.parse(fs.readFileSync(path.join(__dirname, 'json', 'menu.json'), 'utf8'));
let specialsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'json', 'specials.json'), 'utf8'));

// Serve data from JSON files via appropriate endpoints
app.get('/api/content', (req, res) => {
  res.json(contentData);
});

app.get('/api/menu', (req, res) => {
  res.json(menuData);
});

app.get('/api/specials', (req, res) => {
  res.json(specialsData);
});

// An array to save the orders in memory
let ordersPath = path.join(__dirname, 'json', 'orders.json');
let orders = [];

// Try to read the orders.json file
try {
  const rawData = fs.readFileSync(ordersPath, 'utf8');
  if(rawData){
    orders = JSON.parse(rawData);
  }
} catch (e) {
  console.error('Error reading orders:', e);
}

// Post request to save the orders in the server
app.post('/api/order', (req, res) => {
  const order = req.body;
  order.id = orders.length + 1;  // Assign an id to each order
  orders.push(order);
  fs.writeFileSync(ordersPath, JSON.stringify(orders));
  res.json({message: "Order received", orderId: order.id});  // Return the id of the order
});

// Get request to fetch the details of all orders from the server
app.get('/api/order', (req, res) => {
  if (orders.length === 0){
    res.status(404).json({message: 'No orders found'});
  } else {
    res.json(orders);
  }
});

// Get request to fetch the details of a specific order from the server
app.get('/api/order/:id', (req, res) => {
  const orderId = Number(req.params.id);
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    res.status(404).json({message: 'Order not found'});
  } else {
    res.json(order);
  }
});

// Get request to fetch the status of a specific order from the server
app.get('/api/order-status/:id', (req, res) => {
  const orderId = Number(req.params.id);
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    res.status(404).json({message: 'Order not found'});
  } else {
    res.json({status: order.status});
  }
});

// Get request to fetch the latest order of a specific user from the server
app.get('/api/latest-order/:id', (req, res) => {
  const userId = Number(req.params.id);
  // Assuming that orders are sorted in chronological order
  const order = orders.reverse().find(o => o.userId === userId);

  if (!order) {
    res.status(404).json({message: 'Order not found'});
  } else {
    res.json(order);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));


























