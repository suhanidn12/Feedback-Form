const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// POST route to handle feedback form
app.post('/feedback', (req, res) => {
  const { name, email, message } = req.body;
  const feedback = { name, email, message, date: new Date().toISOString() };

  fs.appendFileSync('feedback.json', JSON.stringify(feedback) + '\n');
  res.redirect('/thankyou.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
