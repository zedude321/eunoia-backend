const { Room } = require('../models');

const getAllRooms = async (_req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateRoom = async (req, res) => {
  const { id, update } = req.body;
  try {
    const room = await Room.findByIdAndUpdate(id, update);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    const updatedRoom = await Room.findById(id);
    res.status(201).json(updatedRoom);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const changeItem = async (req, res) => {
  const { id, itemId, update } = req.body;
  const updateFields = {};
  for (const [key, value] of Object.entries(update)) {
    updateFields[`items.$.${key}`] = value;
  }
  try {
    const room = await Room.findOneAndUpdate(
      { _id: id, 'items.id': itemId },
      { $set: updateFields },
      { new: true }
    );
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addItem = async (req, res) => {
  let { id, update } = req.body;
  if (!Array.isArray(update)) update = [update];
  try {
    const room = await Room.findByIdAndUpdate(
      id,
      { $push: { items: { $each: update } } },
      { new: true }
    );

    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeItem = async (req, res) => {
  let { id, itemId } = req.body;
  if (!Array.isArray(itemId)) itemId = [itemId];
  try {
    const room = await Room.findByIdAndUpdate(
      id,
      { $pull: { items: { id: { $in: itemId } } } },
      { new: true }
    );

    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const changePuzzle = async (req, res) => {
  const { id, puzzleId, update } = req.body;
  const updateFields = {};
  for (const [key, value] of Object.entries(update)) {
    updateFields[`puzzles.$.${key}`] = value;
  }
  try {
    const room = await Room.findOneAndUpdate(
      { _id: id, 'puzzles.id': puzzleId },
      { $set: updateFields },
      { new: true }
    );
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPuzzle = async (req, res) => {
  let { id, update } = req.body;
  if (!Array.isArray(update)) update = [update];
  try {
    const room = await Room.findByIdAndUpdate(
      id, 
      { $push: { puzzles: { $each: update } } },
      { new: true }
    );

    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removePuzzle = async (req, res) => {
  let { id, puzzleId } = req.body;
  if (!Array.isArray(puzzleId)) puzzleId = [puzzleId];
  try {
    const room = await Room.findByIdAndUpdate(
      id,
      { $pull: { puzzles: { id: { $in: puzzleId } } } },
      { new: true }
    );

    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(201).json({ message: 'Room deleted successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom,
  changeItem,
  addItem,
  removeItem,
  addPuzzle,
  removePuzzle,
  changePuzzle,
  deleteRoom,
};
