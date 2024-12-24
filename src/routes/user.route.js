const express = require('express');
const userRouter = express.Router();
const {
  getAllPuzzles,
  getPuzzle,
  createPuzzle,
  updatePuzzle,
  deletePuzzle,
} = require('../controllers/');

userRouter.get('/', getAllPuzzles);
userRouter.get('/:id', getPuzzle);
userRouter.post('/create', createPuzzle);
userRouter.patch('/update', updatePuzzle);
userRouter.delete('/delete', deletePuzzle);

module.exports = userRouter;
