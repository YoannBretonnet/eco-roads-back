//~ IMPORTATION ROAD DATA
import { findAll, findOne, createData, updateData, deleteData } from "../datamapper/road.js";

class Road {
    static async findAllRoads(userId) {
        return findAll(userId);
    }

    static async findOneRoad(roadId) {
        return findOne(roadId);
    }

    static async createRoad(userId, road) {
        return createData(userId, road);
    }

    static async updateRoad(roadId, roadData) {
        return updateData(roadId, roadData);
    }

    static async deletRoad(roadId) {
        return deleteData(roadId);
    }
}

export { Road };