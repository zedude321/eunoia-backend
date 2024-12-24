<<<<<<< HEAD
const puzzleCtrls = require('./puzzle.controller')
const userCtrls = require('./user.controller')
const roomCtrls = require('./room.controller')

module.exports = {...puzzleCtrls, ...userCtrls, ...roomCtrls}
=======
const puzzleCtrls = require('./puzzle.controller');
const userCtrls = require('./user.controller');
const itemCtrls = require('./item.controller');

module.exports = { ...puzzleCtrls, ...userCtrls, ...itemCtrls };
>>>>>>> 7a69ab0 (Itemiig hiisen)
