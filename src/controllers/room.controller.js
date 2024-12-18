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
    res.status(201).json(room)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

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
}

const deleteRoom = async (req, res) => {
  const { id } = req.body;
  try {
    const room = await Room.findByIdAndDelete(id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(201).json({ message: 'Room deleted successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
}
