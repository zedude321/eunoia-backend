const { Experience } = require('../models/');

const getAllExperiences = async (_req, res) => {
  try {
    const experience = await Experience.find();
    res.status(200).json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience)
      return res.status(404).json({ message: 'Experience not found' });
    res.status(200).json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createExperience = async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateExperience = async (req, res) => {
  const { id, update } = req.body;
  try {
    const experience = await Experience.findByIdAndUpdate(id, update);
    if (!experience)
      return res.status(404).json({ message: 'Experience not found' });
    const updateExperience = await Experience.findById(id);
    res.status(201).json(updateExperience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addRoom = async (req, res) => {
  let { id, roomId } = req.body;
  if (!Array.isArray(roomId)) roomId = [roomId];
  try {
    const experience = await Experience.findByIdAndUpdate(
      id,
      { $push: { rooms: { $each: roomId } } },
      { new: true }
    );
    if (!experience)
      return res.status(404).json({ message: 'Experience not found' });
    res.status(201).json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeRoom = async (req, res) => {
  let { id, roomId } = req.body;
  if (!Array.isArray(roomId)) roomId = [roomId];
  try {
    const experience = await Experience.findByIdAndUpdate(
      id,
      { $pull: { rooms: { $in: roomId } } },
      { new: true }
    );
    if (!experience)
      return res.status(404).json({ message: 'Experience not found' });
    res.status(201).json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience)
      return res.status(404).json({ message: 'Experience not found' });
    res.status(201).json({ message: 'Experience deleted succesfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllExperiences,
  getExperience,
  createExperience,
  updateExperience,
  addRoom,
  removeRoom,
  deleteExperience,
};
