const express = require('express');
const bcrypt = require('bcryptjs'); // In case you are storing hashed passwords
const db = require('./hello'); // Assuming you have already set up db.js
const jwt = require('jsonwebtoken'); // For generating a token after successful login
const mysql = require('mysql2');
const app = express();
const path = require('path');

const port = 3000; // You can choose any port number
require('dotenv').config(); // To load environment variables

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


//const app = express();
app.use(express.json()); // Parse incoming JSON requests

//creating log in
app.post('/login', (req, res) => {
    const { UserID, User_email, password } = req.body;
  
    // Query to find the user by UserID and User_email
    const query = `SELECT * FROM user WHERE UserID = ? AND User_email = ?`;
  
    // Execute the query
    db.query(query, [UserID, User_email], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }
  
      // If no user is found
      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const user = results[0]; // Get the user data from the query results
  
      // Verify the password (assuming passwords are hashed)
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ message: 'Error comparing passwords' });
        }
  
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid password' });
        }
  
        // Generate JWT token if the password matches
        const token = jwt.sign({ UserID: user.UserID }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
        // Respond with the token and success message
        return res.status(200).json({ message: 'Login successful', token });
      });
    });
  });
  

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
