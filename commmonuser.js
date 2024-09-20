// common user file

const express =  require('express');
const mysql = require('mysql2');
const router = express.Router(); // Create a router object

// MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bracu_parking',
    port: 3306
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err; // Add error handling
        return;
    } else {
        console.log('Connected to the MySQL database.');
    }
});

// Define a route to fetch data from booking/reservation table
router.get('/api/commmonuser', (req, res) => {
    const query = `SELECT * FROM \`common_user\``;
    
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server Error');
            return; 
        } else {
            res.json(results); // Send the data as JSON to the frontend
        }
    });
});

module.exports = router; // Export the router