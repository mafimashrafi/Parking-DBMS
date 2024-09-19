const express = require('express');
const mysql = require('mysql2');
const app = express();
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

// Serve static files (for serving HTML, CSS, and client-side JS)
app.use(express.static('public'));
  

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
