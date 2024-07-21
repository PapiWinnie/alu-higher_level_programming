-- Show User Privileges
SHOW GRANTS FOR user_0d_1@localhost;

-- Create User and Grant All Privileges
CREATE USER IF NOT EXISTS user_0d_1@localhost IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL PRIVILEGES ON *.* TO user_0d_1@localhost;

-- Create Database and User with Select Privileges
CREATE DATABASE IF NOT EXISTS hbtn_0d_2;
CREATE USER IF NOT EXISTS user_0d_2@localhost IDENTIFIED BY 'user_0d_2_pwd';
GRANT SELECT ON hbtn_0d_2.* TO user_0d_2@localhost;

-- Create Tables
CREATE TABLE IF NOT EXISTS force_name (id INT, name VARCHAR(256) NOT NULL);
CREATE TABLE IF NOT EXISTS id_not_null (id INT NOT NULL DEFAULT 1, name VARCHAR(256));
CREATE TABLE IF NOT EXISTS unique_id (id INT DEFAULT 1 UNIQUE, name VARCHAR(256));

