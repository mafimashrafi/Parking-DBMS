// reservation.js

const express =  require('express');
const mysql = require('mysql2');
const router = express.Router(); // Create a router object
const db = require('./hello');
const app = express();
const path = require('path');

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
// Serve static files (for serving HTML, CSS, and client-side JS)
app.use(express.static(path.join(__dirname, 'public')))

// Function to fetch reservations
const getReservations = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM reservation_booking', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = {
    getReservations
};

// API route to handle booking a reservation
router.post('/api/reservation', (req, res) => {
    const { Location_ID, UserID, Car_Number, Car_Type, Date, Start_Time, End_Time } = req.body;

    // SQL query to insert into reservation_booking
    const insertReservation = `
        INSERT INTO booking_reservation (Location_ID, UserID, Car_Number, Car_Type, Date, Start_Time, End_Time)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    // SQL query to delete the location from parking_space
    const deleteParkingSpace = `DELETE FROM parking_space WHERE Location_ID = ?`;

    // Insert reservation
    db.query(insertReservation, [Location_ID, UserID, Car_Number, Car_Type, Date, Start_Time, End_Time], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error inserting reservation' });
        }

        // After successful booking, remove parking space
        db.query(deleteParkingSpace, [Location_ID], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error removing parking space' });
            }

            res.status(200).json({ message: 'Reservation booked and parking space removed' });
        });
    });
});
 

module.exports = router; // Export the router