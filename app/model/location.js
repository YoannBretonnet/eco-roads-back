import { findAll, findOneLocation, findOrCreateData} from "../datamapper/location.js";

class Location {

    static async findAllLocation(){
        return findAll()
    }

    static async findOneLocationByLatAndLon(lat, lon){ 
        return findOneLocation(lat, lon)
    }

    static async createLocation(location){
        return createData(location);
    }

    static async findOrCreateLocation(location){
        return findOrCreateData(location);
    }
}

export { Location }