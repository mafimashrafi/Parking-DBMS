// admin connection

const express =  require('express');
const mysql = require('mysql2');
const router = express.Router(); //router object creator

//databse connection
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    databse : 'bracu_parking',
    port : 3306
});

//connect to databse
connection.connect((err) =>{
    if (err){
        console.error('Error connecting to mysql:', err);
    } else {
        console.log('Connected to MySql Databse');
    }
});

// defin a rout to fetch data
router.get('/api/admin', (req, res) => {
    const query = `SELECT * FROM \admin\``;

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