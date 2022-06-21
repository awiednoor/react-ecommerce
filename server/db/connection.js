const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

const connectDB = () => {
  mongoose.connect(DB_URL, { useNewUrlParser: true });
  db = mongoose.connection;
  db.once('open', () => {
    console.log('Database Connected');
  });

  db.on('error', (err) => {
    console.log('Database Connection Error: ', err);
  });
};

module.exports = connectDB;
