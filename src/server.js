/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

<<<<<<< HEAD
const { userRouter, puzzleRouter, roomRouter, itemRouter } = require('./routes');
=======
const {
  userRouter,
  puzzleRouter,
  roomRouter,
  itemRouter,
  experienceRouter,
} = require('./routes');
>>>>>>> 40a0f60 (added experience model controller and route)

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
app.use('/rooms', roomRouter);
app.use('/items', itemRouter);
<<<<<<< HEAD
=======
app.use('/experiences', experienceRouter);
>>>>>>> 40a0f60 (added experience model controller and route)

app.listen(process.env.PORT, () => {
  console.log('Server started');
});
