const express = require('express');
const router = express.Router();
const {
  initializeDatabase,
  getTransactions
} = require('../controllers/transactionController');

// API to initialize database
router.get('/initialize', initializeDatabase);

// API to fetch transactions with search and pagination
router.get('/', getTransactions);

module.exports = router;
