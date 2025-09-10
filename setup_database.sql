-- MySQL database setup script for your project
-- Change 'myprjt_db' to your preferred database name if needed

CREATE DATABASE IF NOT EXISTS myprjt_db;
USE myprjt_db;

-- Example table (customize as needed)
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    booking_date DATE NOT NULL
);

-- Add more tables as needed below
