// Create web server
const express = require('express');
const app = express();

// Require the 'comments' module
const comments = require('./comments');

// Create a new comment
const newComment = {
  username: 'stranger',
  comment: "I'm learning a lot!"
};

// Add the new comment
comments.addComment(newComment);

// Get all the comments
const allComments = comments.getComments();

// Log the comments to the console
console.log(allComments);
