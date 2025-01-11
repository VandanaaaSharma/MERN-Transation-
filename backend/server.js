const app = require('./app');  // Import the Express app
const connectDB = require('./db');  // Import the MongoDB connection function
require('dotenv').config();  // Load environment variables from .env

// Connect to MongoDB
connectDB();

// Define the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
