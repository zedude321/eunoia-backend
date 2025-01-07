const express = require('express');
const userRouter = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  addExperience,
  removeFriend,
  removeExperience,
  addCosmetic,
  removeCosmetic,
} = require('../controllers/');

userRouter.get('/', getAllUsers);

userRouter.get('/:id', getUser);

userRouter.post('/create', createUser);

userRouter.patch('/update', updateUser);
userRouter.patch('/add-friend', addFriend);
userRouter.patch('/remove-friend', removeFriend);
userRouter.patch('/add-experience', addExperience);
userRouter.patch('/remove-experience', removeExperience);
userRouter.patch('/add-cosmetic', addCosmetic);
userRouter.patch('/remove-cosmetic', removeCosmetic);

userRouter.delete('/delete/:id', deleteUser);

module.exports = userRouter;
