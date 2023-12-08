const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Importing login and server routes
const loginRoute = require('./routes/login');
const serverRoute = require('./routes/server');

// Using the login and server routes
app.use('/login', loginRoute);
app.use('/server', serverRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export the app for testing purposes, if needed
