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
    const experience = await Experience.findById(
      req.params.id
    );
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

const deleteExperience = async (req, res) => {
  const { id } = req.body;
  try {
    const experience = await Experience.findByIdAndDelete(id);
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
  deleteExperience,
};
