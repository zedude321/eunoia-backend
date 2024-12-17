const puzzleCtrls = require('./puzzle.controller')
const userCtrls = require('./user.controller')

module.exports = {...puzzleCtrls, ...userCtrls}