const express = require('express');
const {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  changeItem,
  changePuzzle,
  addItem,
  removeItem,
  addPuzzle,
  removePuzzle,
} = require('../controllers');
const roomRouter = express.Router();

roomRouter.get('/', getAllRooms);
roomRouter.get('/:id', getRoom);
roomRouter.post('/create', createRoom);
roomRouter.patch('/update', updateRoom);
roomRouter.patch('/changeItem', changeItem);
roomRouter.patch('/addItem', addItem);
roomRouter.patch('/removeItem', removeItem);
roomRouter.patch('/changePuzzle', changePuzzle);
roomRouter.patch('/addPuzzle', addPuzzle);
roomRouter.patch('/removePuzzle', removePuzzle);
roomRouter.delete('/delete/:id', deleteRoom);

module.exports = roomRouter;
