let roomBasic = {

    /** @param {Room} room **/
    run: function(room) {
        let triangleCenterX = 25;
        let triangleCenterY = 25;
        if (room.controller.my) {
            let spawns = room.find(FIND_MY_SPAWNS);
            if (room.controller.level >= 8 && spawns.length < 3) {
                Room.createConstructionSite(triangleCenterX + 3, triangleCenterY + 2, STRUCTURE_SPAWN);
            }
            else if (room.controller.level >= 7 && spawns.length < 2) {
                Room.createConstructionSite(triangleCenterX - 3, triangleCenterY + 2, STRUCTURE_SPAWN);
            }
            else if (room.controller.level > 0 && spawns.length < 1) {
                Room.createConstructionSite(triangleCenterX, triangleCenterY - 3, STRUCTURE_SPAWN);
            }
        }
    }
};

module.exports = roomBasic;
