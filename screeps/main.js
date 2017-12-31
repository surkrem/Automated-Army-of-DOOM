let roomBasic = require('room.basic');
let creepHarvester = require('creep.harvester');

module.exports.loop = function() {
    roomBasic.run(Game.rooms.sim);
}
