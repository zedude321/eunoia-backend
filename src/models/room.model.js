const mongoose = require('mongoose');

const ItemSubSchema = mongoose.Schema({
  location_x: {
    type: Number,
    required: false,
    default: 0,
  },
  location_y: {
    type: Number,
    required: false,
    default: 0,
  },
  isInInventory: {
    type: Boolean,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Item'
  }
});

const PuzzleSubSchema = mongoose.Schema({
  location_x: {
    type: Number,
    required: true,
  },
  location_y: {
    type: Number,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Puzzle'
  }
});

const RoomSchema = mongoose.Schema({
  room_name: {
    type: String,
    required: [true, 'Please enter room name'],
  },
  lock: {
    type: [mongoose.Schema.Types.ObjectId, Boolean],
    ref: 'Item',
    required: false,
    default: false,
  },
  image: {
    type: String,
    required: true,
  },
  items: [ItemSubSchema],
  puzzles: [PuzzleSubSchema]
});

const Room = mongoose.model('Room', RoomSchema);
module.exports = Room;
