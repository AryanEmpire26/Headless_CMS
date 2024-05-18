# Rudimentary Headless CMS

## Overview
Rudimentary Headless CMS is a simple content management system (CMS) designed for managing various entities such as persons, orders, locations, and reviews. It provides basic CRUD (Create, Read, Update, Delete) functionalities for each entity, allowing users to perform operations via a web interface.

## Features
- Create, read, update, and delete persons, orders, locations, and reviews.
- User-friendly interface for managing entities.
- RESTful API backend for handling data operations.
- Seamless integration with frontend using React.js.

## Installation
1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Set up MySQL database:
- Create a MySQL database named `entity`.
- Within the `entity` database, create tables named `person`, `order`, `location`, and `review` with the following attributes:
  - `person` table:
    - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
    - `name` (VARCHAR)
    - `email` (VARCHAR)
    - `dob` (INT)
    - `mobile` (VARCHAR)
  - `order` table:
    - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
    - `orderNo` (VARCHAR)
    - `customername` (VARCHAR)
    - `orderdate` (INT)
    - `amount` (DECIMAL)
    - `status` (VARCHAR)
  - `location` table:
    - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
    - `name` (VARCHAR)
    - `latitude` (DECIMAL)
    - `longitude` (DECIMAL)
    - `disc` (VARCHAR)
  - `review` table:
    - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
    - `productid` (INT)
    - `customername` (VARCHAR)
    - `rating` (INT)
    - `productreview` (TEXT)
5. Update the MySQL connection configuration in the backend server (`server.js`) to match your MySQL database credentials.


## Usage
1. Start the backend server:
2. Start the frontend development server:
3. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Technologies Used
- React.js
- Node.js
- Express.js
- MySql
- Axios
- React Router
- HTML
- CSS


