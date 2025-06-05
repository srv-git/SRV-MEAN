

const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const cardRoutes = require('./src/routes/cardRoutes');

const app = express();
const corsOptions = {
  origin: ['http://localhost:4200', 'https://srv-mean.onrender.com'],
  credentials: true
};

// Connect to the database first
connectDB()
  .then(() => {
    // Middleware setup 
    app.use(cors(corsOptions)); 
    app.use(express.json());

    // Routes
    app.use('/', authRoutes);
    app.use('/', cardRoutes);
    app.use('/', userRoutes);

    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Local: http://localhost:${PORT}/`);
    });
  })
  .catch(err => {
    console.log('Error connecting db!', err);
  });