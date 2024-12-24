/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

<<<<<<< HEAD
const { userRouter, puzzleRouter, roomRouter } = require('./routes');
=======
const { userRouter, puzzleRouter, itemRouter } = require('./routes');
>>>>>>> 7a69ab0 (Itemiig hiisen)

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => {
    throw err;
  });

app.use(express.json());

// Routers
app.use('/users', userRouter);
app.use('/puzzles', puzzleRouter);
<<<<<<< HEAD
app.use('/rooms', roomRouter);
=======
app.use('/items', itemRouter);
>>>>>>> 7a69ab0 (Itemiig hiisen)

app.listen(process.env.PORT, () => {
  console.log('Server started');
});
