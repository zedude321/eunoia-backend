/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
app.use(cors());
require('dotenv').config();

const {
  userRouter,
  puzzleRouter,
  roomRouter,
  itemRouter,
  experienceRouter,
} = require('./routes');

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
app.use('/experiences', experienceRouter);

app.listen(process.env.PORT, () => {
  console.log('Server started');
});
