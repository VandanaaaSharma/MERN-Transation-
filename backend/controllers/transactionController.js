const axios = require('axios');
const Transaction = require('../models/transactionModel');

// Initialize the database with seed data
const initializeDatabase = async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        await Transaction.deleteMany();  // Clear existing data
        await Transaction.insertMany(response.data);
        res.status(200).json({ message: 'Database initialized with seed data.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to initialize the database.' });
    }
};

// Fetch all transactions with search and pagination
const getTransactions = async (req, res) => {
    try {
        const { search = '', page = 1, limit = 10, month } = req.query;
        const regex = new RegExp(search, 'i');  // Case-insensitive search

        const filter = {
            $or: [
                { title: regex },
                { description: regex },
                { price: parseFloat(search) || -1 }
            ]
        };

        if (month) {
            filter.dateOfSale = { $regex: month, $options: 'i' };
        }

        const transactions = await Transaction.find(filter)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions.' });
    }
};

module.exports = {
    initializeDatabase,
    getTransactions
};
