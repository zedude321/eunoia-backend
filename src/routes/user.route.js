const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controller')

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.post("/create", createUser);

router.patch("/update", updateUser);

router.delete("/delete", deleteUser);

module.exports = router;
