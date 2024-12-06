const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  addExperience
} = require('../controllers/user.controller')

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.post("/create", createUser);

router.patch("/update", updateUser);
router.patch("/add-friend", addFriend);
router.patch("/add-experience", addExperience);

router.delete("/delete", deleteUser);

module.exports = router;
