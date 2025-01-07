const { Puzzle } = require('../models/');

const getAllPuzzles = async (_req, res) => {
  try {
    const puzzles = await Puzzle.find();
    res.status(200).json(puzzles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPuzzle = async (req, res) => {
  try {
    const puzzle = await Puzzle.findById(req.params.id);
    if (!puzzle) return res.status(404).json({ message: 'Puzzle not found' });
    res.status(200).json(puzzle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createPuzzle = async (req, res) => {
  try {
    const puzzle = await Puzzle.create(req.body);
    res.status(201).json(puzzle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePuzzle = async (req, res) => {
  const { id, update } = req.body;
  try {
    const puzzle = await Puzzle.findByIdAndUpdate(id, update);
    if (!puzzle) return res.status(404).json({ message: 'Puzzle not found' });
    const updatedPuzzle = await Puzzle.findById(id);
    res.status(201).json(updatedPuzzle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePuzzle = async (req, res) => {
  try {
    const puzzle = await Puzzle.findByIdAndDelete(req.params.id);
    if (!puzzle) return res.status(404).json({ message: 'Puzzle not found' });
    res.status(201).json({ message: 'Puzzle deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPuzzles,
  getPuzzle,
  createPuzzle,
  updatePuzzle,
  deletePuzzle,
};
