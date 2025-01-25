const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData); 
});

//CORRECT HANDLING OF ERRORS
app.get('/users/:id/profile', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user profile ...
  if (!userProfile) {
    return res.status(404).send('Profile not found');
  }
  res.send(userProfile); 
});