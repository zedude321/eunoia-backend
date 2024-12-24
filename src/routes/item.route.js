const express = require('express');
const {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers');
const itemRouter = express.Router();

itemRouter.get('/', getAllItems);
itemRouter.get('/:id', getItem);
itemRouter.post('/create', createItem);
itemRouter.patch('/update', updateItem);
itemRouter.delete('/delete', deleteItem);

module.exports = itemRouter;
