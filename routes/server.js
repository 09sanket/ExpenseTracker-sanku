const express = require('express');
const app = express();
const db = require('../database'); // Use ../ to go up one level to the root folder


// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: false }));

// Serve static files (like HTML, CSS)
app.use(express.static('public'));





// Handle form submission
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const INSERT_USER_QUERY = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

  db.query(INSERT_USER_QUERY, [username, email, password], (err, result) => {
    if (err) {
      res.status(500).send('Error inserting user');
    } else {
      res.status(200).send('User inserted successfully');
    }
  });
});

module.exports = app;