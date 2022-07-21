//~ IMPORTATION CAR DATA
import { findAll, findOne, createData, updateData, deleteData } from "../datamapper/car.js";

class Car {
    static async findAllCars() {
        return findAll();
    }

    static async findOneCar(carId) {
        return findOne(carId);
    }

    static async createCar(carData) {
        return createData(carData);
    }

    static async updateCar(carId, carData) {
        return updateData(carId, carData);
    }

    static async deleteCar(carId) {
        return deleteData(carId);
    }
}

export { Car };