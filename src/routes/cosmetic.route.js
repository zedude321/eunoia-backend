const express = require('express');
const {
  getAllCosmetics,
  getCosmetic,
  createCosmetic,
  updateCosmetic,
  deleteCosmetic,
} = require('../controllers');
const cosmeticRouter = express.Router();

cosmeticRouter.get('/', getAllCosmetics);
cosmeticRouter.get('/:id', getCosmetic);
cosmeticRouter.post('/create', createCosmetic);
cosmeticRouter.patch('/update', updateCosmetic);
cosmeticRouter.delete('/delete/:id', deleteCosmetic);

module.exports = cosmeticRouter;
