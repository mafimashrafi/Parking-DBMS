<?php
$servername = "localhost";  // Usually "localhost" when using XAMPP
$username = "root";         // Default XAMPP user
$password = "";             // Default XAMPP password is empty
$dbname = "your_database";  // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
