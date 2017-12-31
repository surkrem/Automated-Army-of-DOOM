let roomBasic = require('room.basic');

module.exports.loop = function() {
    roomBasic.run(Game.rooms.sim);
}
