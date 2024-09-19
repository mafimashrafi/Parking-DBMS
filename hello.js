const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',       // Your MySQL host (usually 'localhost')
    user: 'root',            // Your MySQL username (replace 'root' if different)
    password: '',            // Your MySQL password
    database: 'bracu_parking',  // Your database name
    port: 3306               // Ensure this is the correct port (default is 3306)
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the MySQL server.');

    // Step 1: Show all tables in the database
    connection.query('SHOW TABLES', (err, results) => {
        if (err) {
            console.error('Error retrieving tables:', err);
            return;
        }

        // List of tables
        const tableList = results.map(row => Object.values(row)[0]);

        // Step 2: Access each table (without showing any results)
        tableList.forEach((table) => {
            connection.query(`SELECT * FROM \`${table}\` LIMIT 1`, (err) => {
                if (err) {
                    console.error(`Error querying table ${table}:`, err);
                    return;
                }
                console.log(`Connected to table: ${table}`);
            });
        });
    });
});

// Optionally, you can close the connection when all queries are done

