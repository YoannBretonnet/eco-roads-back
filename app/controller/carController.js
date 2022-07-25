//~ IMPORTATION ERROR

import { _400, _404, _500 } from "./errorController.js";
import { Car } from "../model/car.js";
import { Brand } from "../model/brand.js";

//~ FUNCTIONS

//~---------------------------------------FETCH ALL CARS

async function fetchAllCars(req, res) {
    try {
        const brands = await Brand.findAllBrands();
        console.log("🚀 ~ file: carController.js ~ line 14 ~ fetchAllCars ~ brands", brands);

        const cars = await Car.findAllCars();
        console.log("🚀 ~ file: carController.js ~ line 17 ~ fetchAllCar s ~ cars", cars);

        if (cars && brands) res.status(200).json({brands, cars});
        else throw new Error(`Aucune voiture n'a été trouvé`);
    } catch (err) {
        _500(err, req, res);
    }
}

//~---------------------------------------FETCH ONE CAR

async function fetchOneCar(req, res) {
    try {
        const carId = +req.params.id;

        const car = await Car.findOneCar(carId);

        if (car) res.status(200).json(car);
        else throw new Error(`Le véhicule n'existe pas`);
    } catch (err) {
        _500(err, req, res);
    }
}

//~---------------------------------------CREATE CAR

async function createCar(req, res) {
    try {
        // Les vérifications sont faites grâce a Joi et ses schémas
        await Car.createCar(req.body);

        return res.status(200).json(`Le véhicule a bien été créé`);
    } catch (err) {
        _500(err, req, res);
    }
}

//~----------------------------------------UPDATE CAR

async function updateCar(req, res) {
    try {
        const carId = +req.params.id;

        let carInfo = await Car.findOneCar(carId);

        for (const key in carInfo) {
            req.body[key] ? req.body[key] : (req.body[key] = carInfo[key]);
        }

        await Car.updateCar(carId, req.body);

        return res.status(200).json(`Le véhicule a bien été modifié`);
    } catch (err) {
        _500(err, req, res);
    }
}

//~-------------------------------------------DELETE CAR

async function deleteCar(req, res) {
    try {
        const carId = +req.params.id;
        await Car.deleteCar(carId);

        return res.status(200).json(`Le véhicule a bien été supprimé`);
    } catch (err) {
        _500(err, req, res);
    }
}

export { fetchAllCars, fetchOneCar, createCar, updateCar, deleteCar };
