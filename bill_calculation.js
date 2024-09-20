// bill_calculation connection

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


// defin a rout to fetch data
router.get('/api/bill_calculation', (req, res) => {
    const query = `SELECT * FROM \bill_calculation\``;

    connection.query(query, (err, result) => {
        if (err){
            console.error('Error fetching data:', err);
            res.status(500).send('Server Error');
        } else {
            res.json(results); // send the data as a json to front end
        }
    });
});

module.exports = router; //exporting router