const express = require("express");
const userRouter = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  addExperience
} = require('../controllers/')

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUser);

userRouter.post("/create", createUser);

userRouter.patch("/update", updateUser);
userRouter.patch("/add-friend", addFriend);
userRouter.patch("/add-experience", addExperience);

userRouter.delete("/delete", deleteUser);

module.exports = userRouter;
