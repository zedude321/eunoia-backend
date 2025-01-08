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
userRouter.patch('/addFriend', addFriend);
userRouter.patch('/removeFriend', removeFriend);
userRouter.patch('/addExperience', addExperience);
userRouter.patch('/removeExperience', removeExperience);
userRouter.patch('/addCosmetic', addCosmetic);
userRouter.patch('/removeCosmetic', removeCosmetic);

userRouter.delete('/delete/:id', deleteUser);

module.exports = userRouter;
