let roomBasic = {

    /** @param {Room} room **/
    run: function(room) {
        if (room.controller.my) {
            let spawns = room.find(FIND_MY_SPAWNS);
            if (spawns.length < 1) {
                Room.createConstructionSite(25, 23, STRUCTURE_SPAWN);
            }
        }
    }
};

module.exports = roomBasic;
