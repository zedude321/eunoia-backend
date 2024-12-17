const express = require('express');
const puzzleRouter = express.Router();
const {
  getAllPuzzles,
  getPuzzle,
  createPuzzle,
  updatePuzzle,
  deletePuzzle,
} = require('../controllers/');

puzzleRouter.get('/', getAllPuzzles);
puzzleRouter.get('/:id', getPuzzle);
puzzleRouter.post('/create', createPuzzle);
puzzleRouter.patch('/update', updatePuzzle);
puzzleRouter.delete('/delete', deletePuzzle);

module.exports = puzzleRouter;
