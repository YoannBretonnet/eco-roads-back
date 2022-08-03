//~ IMPORTATION INTERESTING POINT DATA
import { findAll, findOne, findInterestingPointByCategory } from "../datamapper/interesting_point.js";

class InterestingPoint {

    static async findAllInterestingPoint() {
        return findAll();
    }

    static async findOneInterestingPoint(interestingPointId) {
        return findOne(interestingPointId);
    }

    static async

    static async findInterestingPointCategories(categories) {
        return findInterestingPointByCategory(categories);
    }
}

export { InterestingPoint };