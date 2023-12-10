// Assuming you have initialized the MySQL connection as 'db'

// Adding Expense
app.post('/addexpense', (req, res) => {
    const { expenseamount, category, description } = req.body;
  
    const INSERT_EXPENSE_QUERY = 'INSERT INTO expenses (expenseamount, category, description) VALUES (?, ?, ?)';
  
    db.query(INSERT_EXPENSE_QUERY, [expenseamount, category, description], (err, result) => {
      if (err) {
        console.error('Error adding expense:', err);
        res.status(500).send('Error adding expense');
      } else {
        res.status(200).send('Expense added successfully');
      }
    });
  });
  
  // Fetching Old Expenses
  app.get('/oldexpenses', (req, res) => {
    const FETCH_EXPENSES_QUERY = 'SELECT * FROM expenses';
  
    db.query(FETCH_EXPENSES_QUERY, (err, results) => {
      if (err) {
        console.error('Error fetching expenses:', err);
        res.status(500).send('Error fetching expenses');
      } else {
        res.status(200).json(results); // Sending fetched expenses as JSON
      }
    });
  });
  