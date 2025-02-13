// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// In-memory database to store comments
let comments = [];

// Endpoint to retrieve all comments
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// Endpoint to add a new comment
app.post('/api/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    text: req.body.text,