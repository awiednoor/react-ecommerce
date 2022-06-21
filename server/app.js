require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connection');

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Hello Ecommerce');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

module.exports = app;
