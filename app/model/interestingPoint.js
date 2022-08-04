//~ IMPORTATION INTERESTING POINT DATA
import { getAllInterestingPointByCategory, getAllChargingStationByCar } from "../datamapper/interestingPoint.js";

class InterestingPoint {

    static async findAllInterestingPoint() {
        return findAll();
    }

    static async findOneInterestingPoint(interestingPointId) {
        return findOne(interestingPointId);
    }

    static async findChargingStationByNetwork(car_id){
        return getAllChargingStationByCar(car_id);
    }

    static async findInterestingPointCategories(categories) {
        return getAllInterestingPointByCategory(categories);
    }
}

export { InterestingPoint };