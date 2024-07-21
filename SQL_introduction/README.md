-- SQL Databases Project

-- List all databases
SHOW databases;

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS database;

-- Drop database if exists
DROP DATABASE IF EXISTS database;

-- Show tables in a database
SHOW TABLES;

-- Create a table
CREATE TABLE first_table (id INT, name VARCHAR(256));

-- List all rows in a table
SELECT * FROM first_table;

-- Show table description
SHOW CREATE TABLE first_table;

-- List records ordered by score
SELECT score, name FROM second_table ORDER BY score DESC;

-- Create second table if not exists
CREATE TABLE IF NOT EXISTS second_table (id INT, name VARCHAR(256), score INT);

-- Insert data into second_table
INSERT INTO second_table (id, name, score) VALUES (1, "John", 10), (2, "Alex", 3), (3, "Bob", 14), (4, "George", 8);

-- Count records with id = 89
SELECT COUNT(id) FROM first_table WHERE id = 89;

-- Insert a row into first_table
INSERT INTO first_table VALUES (89, "Best School");

-- Update a value in second_table
UPDATE second_table SET score = 10 WHERE name = 'Bob';

-- Compute the average score
SELECT AVG(score) AS average FROM second_table;

