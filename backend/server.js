const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();  // Make sure dotenv is loaded before using process.env

// Fetch MongoDB URI from .env file
const uri = process.env.MONGO_URI;  // This should be in your .env file

// Ensure MONGO_URI is present in the environment variables
if (!uri) {
  console.error('MongoDB URI is not defined. Please check your .env file.');
  process.exit(1);  // Stop the application if URI is missing
}

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error: ', err);
    process.exit(1);  // Stop the application on MongoDB connection failure
  });

const connectDB = require('./config/db');

// Use the connectDB function if it's needed to do more things (e.g., custom MongoDB connection handling)
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
