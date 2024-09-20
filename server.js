const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require('path');

const port = 3000; // You can choose any port number

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
    } else {
        console.log('Connected to the MySQL database.');
    }
});
const cors = require('cors');
app.use(cors()); // Use CORS with default settings

// Serve static files (for serving HTML, CSS, and client-side JS)
app.use(express.static(path.join(__dirname, 'public')))

//path of reservation table
const reservationRoute = require('./reservation');
app.use('/reservation', reservationRoute)

//path of commmonuser table
const commonRoute = require('./commmonuser');
app.use('/commmonuser', commonRoute)

//path of bill_calculation table
const bill_calculationRoute = require('./bill_calculation');
app.use('/bill_calculation', bill_calculationRoute)
  
// path of parking_sapce 
const parking_spaceRoute = require('./parking_space');
app.use('/parking_space', parking_spaceRoute)

// path of review
const reviewRoute = require('./reviewe');
app.use('/reviewe', reviewRoute)

// path of payment
const paymentRoute = require('./payment');
app.use('/payment', paymentRoute)

// Example route: Fetch data from a table
app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM user', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server Error');
        } else {
            res.json(results);
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
