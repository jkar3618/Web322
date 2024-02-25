# Web Application with AJAX, JSON, and APIs

## Description

This Project is for Test3 of Web322
This project demonstrates the development of basic web applications using AJAX, JSON, and APIs. It consists of a back-end API built on Node.js and Express, JSON files with example data, and a front-end HTML page that dynamically loads data using AJAX.

## Backend API (server.js)

The backend API serves as a RESTful service providing two endpoints:

- `/api/data`: Retrieve all entries.
- `/api/data/:id`: Retrieve a single entry by id.

### How to Run the Backend

1. Install Node.js and npm.
2. Run `npm install` to install dependencies.
3. Run `node server.js` to start the server.

## Frontend (index.html, script.js, styles.css)

- `index.html`: HTML page with buttons and an input field.
- `script.js`: Contains AJAX functions to fetch and display data.
- `styles.css`: Provides basic styling for better presentation.

### How to Run the Frontend

1. Open `index.html` in a web browser.

## Design Choices

- **Backend**: Node.js and Express were chosen for their simplicity and efficiency in setting up a RESTful API.
- **Frontend**: AJAX with jQuery was used for asynchronous data fetching to create dynamic and responsive web pages.
