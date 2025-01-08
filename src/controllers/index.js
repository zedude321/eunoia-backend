const puzzleCtrls = require('./puzzle.controller');
const userCtrls = require('./user.controller');
const roomCtrls = require('./room.controller');
const itemCtrls = require('./item.controller');
const experienceCtrls = require('./experience.controller');
const cosmeticCtrls = require('./cosmetic.controller');

module.exports = {
  ...puzzleCtrls,
  ...userCtrls,
  ...itemCtrls,
  ...roomCtrls,
  ...experienceCtrls,
  ...cosmeticCtrls
};
