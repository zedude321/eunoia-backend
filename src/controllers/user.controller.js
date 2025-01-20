const { User } = require('../models/');

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
  let { id, friendId } = req.body;
  if (!Array.isArray(friendId)) friendId = [friendId];
  if (friendId.includes(id))
    return res.status(500).json({ message: 'Cannot add yourself as a friend' });
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $addToSet: { friends: { $each: friendId } } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeFriend = async (req, res) => {
  let { id, friendId } = req.body;
  if (!Array.isArray(friendId)) friendId = [friendId]
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $pull: { friends: { $in: friendId } } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addExperience = async (req, res) => {
  let { id, experienceId } = req.body;
  if (!Array.isArray(experienceId)) experienceId = [experienceId]
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $addToSet: { owned_experiences: { $each: experienceId } } },
      { new: true }
    );
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeExperience = async (req, res) => {
  let { id, experienceId } = req.body;
  if (!Array.isArray(experienceId)) experienceId = [experienceId]
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $pull: { owned_experiences: { $in: experienceId } } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addCosmetic = async (req, res) => {
  let { id, cosmeticId } = req.body;
  if (!Array.isArray(cosmeticId)) cosmeticId = [cosmeticId]
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $addToSet: { owned_cosmetics: { $each: cosmeticId } } },
      { new: true }
    );
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeCosmetic = async (req, res) => {
  let { id, cosmeticId } = req.body;
  if (!Array.isArray(cosmeticId)) cosmeticId = [cosmeticId]
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $pull: { owned_cosmetics: { $in: cosmeticId } } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
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
  removeFriend,
  addExperience,
  removeExperience,
  addCosmetic,
  removeCosmetic,
  deleteUser,
};
