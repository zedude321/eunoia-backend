const roomRouter = require('./room.route');
const userRouter = require('./user.route');
const puzzleRouter = require('./puzzle.route');
const itemRouter = require('./item.route');
const experienceRouter = require('./experience.route');

module.exports = {
  puzzleRouter,
  userRouter,
  itemRouter,
  roomRouter,
  experienceRouter,
};
