

const express = require('express');
const connectDB = require('./src/config/db');

const userRoutes = require('./src/routes/userRoutes');
const cardRoutes = require('./src/routes/cardRoutes');

const app = express();

connectDB()
  .then(()=>{
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`, `http://localhost:${PORT}/`);
    });
  }).catch(err=>{
      console.log('Error connecting db!', err)
  });

app.use(express.json());
app.use('/', cardRoutes);
app.use('/', userRoutes);