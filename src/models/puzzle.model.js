const mongoose = require('mongoose');

const PuzzleSchema = mongoose.Schema({
  format: {
    type: String,
    required: [true, 'Please enter puzzle format'],
  },
  answer: {
    type: String,
    required: [true, 'Please enter answer'],
  },
  image: {
    type: String,
    required: [true, 'Please enter puzzle image'],
  },
  puzzle_name: {
    type: String,
    required: [true, 'Please enter puzzle name'],
  },
  hint: {
    type: String,
    required: [true, 'Please enter puzzle hint'],
  },
  description: {
    type: String,
    required: [true, 'Please enter puzzle description'],
  },
  reward: {
    type: String, // TODO Temporary
    ref: 'Item',
    required: false,
    default: '',
  },
});

const Puzzle = mongoose.model('Puzzle', PuzzleSchema);
module.exports = Puzzle;
