const puzzleCtrls = require('./puzzle.controller')
const userCtrls = require('./user.controller')
const roomCtrls = require('./room.controller')

module.exports = {...puzzleCtrls, ...userCtrls, ...roomCtrls}