const express = require('express');
const {
  getAllExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require('../controllers');
const experienceRouter = express.Router();

experienceRouter.get('/', getAllExperiences);
experienceRouter.get('/:id', getExperience);
experienceRouter.post('/create', createExperience);
experienceRouter.patch('/update', updateExperience);
experienceRouter.delete('/delete/:id', deleteExperience);

module.exports = experienceRouter;
