// login.js

const express = require('express');
const router = express.Router();
const db = require('../database'); // Use ../ to go up one level to the root folder


router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
    if (error) {
      console.error('Error retrieving user:', error);
      res.status(500).send('Internal server error');
    } else {
      if (results.length === 0) {
        res.status(404).send('User not found');
      } else {
        const user = results[0];

        if (user.password === password) {
          res.status(200).send('User login successful');
        } else {
          res.status(401).send('User not authorized');
        }
      }
    }
  });
});

module.exports = router;
