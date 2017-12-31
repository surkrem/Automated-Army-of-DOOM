let creepHarvester =  {
    VALID_STRUCTURES: [STRUCTURE_SPAWN],

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.carry.energy < creep.carryCapacity) {
            let sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                moveTo(sources[0]);
            }
            else {
                let targets = creep.room.find(FIND_MY_STRUCTURES, {
                    filter: function(structure) {
                        this.VALID_STRUCTURES.forEach(function(validStructureType) {
                            if (structure.structureType == validStructureType) {
                                return structure
                            }
                        });
                    }
                });
                if (creep.transfer(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
};

module.exports = creepHarvester;
