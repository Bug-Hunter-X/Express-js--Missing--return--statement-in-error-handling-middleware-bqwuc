const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct way
  }
  res.send(userData); 
});

//INCORRECT HANDLING OF ERRORS
app.get('/users/:id/profile', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user profile ...
  if (!userProfile) {
    res.status(404).send('Profile not found'); //Missing return statement
  }
  res.send(userProfile); 
});