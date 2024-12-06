const User = require('../models/user.model');

const getAllUsers = async (_req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  const { id, update } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, update);
    if (!user) return res.status(404).json({ message: 'User not found' });
    const updatedUser = await User.findById(id);
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addFriend = async (req, res) => {
  const { id, friendId } = req.body;
  if (id == friendId) return res.status(500).json({ message: 'Cannot add yourself as a friend' });
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $addToSet: { friends: friendId } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    const updatedUser = await User.findById(id);
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// eslint-disable-next-line no-unused-vars
const addExperience = async (_req, _res) => {
  // TODO: Waiting for Experience model
}

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(201).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  addFriend,
  addExperience,
  deleteUser,
};
