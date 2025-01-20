const express = require('express');
const {
  getAllExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
  addRoom,
  removeRoom,
} = require('../controllers');
const experienceRouter = express.Router();

experienceRouter.get('/', getAllExperiences);
experienceRouter.get('/:id', getExperience);
experienceRouter.post('/create', createExperience);
experienceRouter.patch('/update', updateExperience);
experienceRouter.patch('/addRoom', addRoom);
experienceRouter.patch('/removeRoom', removeRoom);
experienceRouter.delete('/delete/:id', deleteExperience);

module.exports = experienceRouter;
