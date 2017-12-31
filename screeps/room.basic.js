let roomBasic = {

    /** @param {Room} room **/
    run: function(room) {
        if (room.controller.my) {
            let spawns = room.find(FIND_MY_SPAWNS);
            if (room.controller.level >= 8 && spawns.length < 3) {
                Room.createConstructionSite(28, 27, STRUCTURE_SPAWN);
            }
            else if (room.controller.level >= 7 && spawns.length < 2) {
                Room.createConstructionSite(22, 27, STRUCTURE_SPAWN);
            }
            else if (room.controller.level > 0 && spawns.length < 1) {
                Room.createConstructionSite(25, 22, STRUCTURE_SPAWN);
            }
        }
    }
};

module.exports = roomBasic;
