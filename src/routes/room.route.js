const express = require('express');
const { getAllRooms, getRoom, createRoom, updateRoom, deleteRoom } = require('../controllers');
const roomRouter = express.Router();

roomRouter.get('/', getAllRooms);
roomRouter.get('/:id', getRoom);
roomRouter.post('/create', createRoom);
roomRouter.patch('/update', updateRoom);
roomRouter.delete('/delete', deleteRoom);

module.exports = roomRouter;
