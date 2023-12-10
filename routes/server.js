const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for bcrypt hashing

// ...

// Handle form submission
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const INSERT_USER_QUERY = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

    db.query(INSERT_USER_QUERY, [username, email, hashedPassword], (err, result) => {
      if (err) {
        res.status(500).send('Error inserting user');
      } else {
        // Redirect to login.html after successful signup
        res.redirect('/login.html');
      }
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send('Internal server error');
  }
});
