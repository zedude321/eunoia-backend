const { Cosmetic } = require('../models');

const getAllCosmetics = async (_req, res) => {
  try {
    const cosmetic = await Cosmetic.find();
    res.status(200).json(cosmetic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCosmetic = async (req, res) => {
  try {
    const cosmetic = await Cosmetic.findById(req.params.id);
    if (!cosmetic)
      return res.status(404).json({ message: 'Cosmetic not found' });
    res.status(200).json(cosmetic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCosmetic = async (req, res) => {
  try {
    const cosmetic = await Cosmetic.create(req.body);
    res.status(200).json(cosmetic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCosmetic = async (req, res) => {
  const { id, update } = req.body;
  try {
    const cosmetic = await Cosmetic.findByIdAndUpdate(id, update);
    if (!cosmetic)
      return res.status(404).json({ message: 'Cosmetic not found' });
    const updatedCosmetic = await Cosmetic.findById(id);
    res.status(200).json(updatedCosmetic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCosmetic = async (req, res) => {
  try {
    const cosmetic = await Cosmetic.findByIdAndDelete(req.params.id);
    if (!cosmetic)
      return res.status(404).json({ message: 'Cosmetic not found' });
    res.status(200).json(cosmetic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCosmetics,
  getCosmetic,
  createCosmetic,
  updateCosmetic,
  deleteCosmetic,
};
