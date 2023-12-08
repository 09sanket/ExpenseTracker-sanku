const bcrypt = require('bcrypt');

// ...

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
    if (error) {
      console.error('Error retrieving user:', error);
      res.status(500).send('Internal server error');
    } else {
      if (results.length === 0) {
        res.status(404).send('User not found');
      } else {
        const user = results[0];

        try {
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) {
            res.status(200).send('User login successful');
          } else {
            res.status(401).send('User not authorized');
          }
        } catch (error) {
          console.error('Error during password comparison:', error);
          res.status(500).send('Internal server error');
        }
      }
    }
  });
});
