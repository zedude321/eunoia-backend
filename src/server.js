/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
const usersRouter = require('./routes/user.route')

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log('Connected to DB')
}).catch(err => {throw err})

app.use(express.json())

// Routers
app.use('/users', usersRouter)

app.listen(process.env.PORT, () => {
  console.log('Server started')
})