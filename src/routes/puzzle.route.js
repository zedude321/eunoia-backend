const express = require('express');
const router = express.Router();
const {
  getAllPuzzles,
  getPuzzle,
  createPuzzle,
  updatePuzzle,
  deletePuzzle,
} = require('../controllers/puzzle.controller');

router.get('/', getAllPuzzles);
router.get('/:id', getPuzzle);
router.post('/create', createPuzzle);
router.patch('/update', updatePuzzle);
router.delete('/delete', deletePuzzle);

module.exports = router;
