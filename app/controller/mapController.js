import { _400, _404, _500 } from "./errorController.js";
import { InterestingPoint } from "../model/interestingPoint.js";
import { Car } from "../model/car.js";
import { Category } from "../model/category.js";
import { polygonArea } from "../utils/polygon.js";
import * as geolib from "geolib";


//~---------------------------------------CREATE MAP
async function createMap(req, res) {
    try {
        console.log("TEST MAPPING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        // recuperer les infos des modales via un req.body
        const { location, arrival, categories, car_id } = req.body;
        const departure = { lat: location.Lat, lng: location.Long };

        // POI en fonction des categories
        const interesting = await InterestingPoint.findInterestingPointCategories(categories);
        console.log("🚀 ~ file: mapController.js ~ line 19 ~ createMap ~ interesting", interesting)
        const networks = await InterestingPoint.findChargingStationByNetwork(car_id);
        console.log("🚀 ~ file: mapController.js ~ line 21 ~ createMap ~ networks", networks)
        const visitorCar = await Car.findOneCar(car_id);
        const visitorCategory = await Category.findCategoryVisitor(categories)

        const polygon = polygonArea(location, arrival);

        const POI = [{ lat: arrival.Lat, lon: arrival.Long }];

        for (const category of interesting) {
            const isPointInPolygon = geolib.isPointInPolygon(
                { lat: category.coordinates.lat, lon: category.coordinates.lon },
                polygon.waypoints,
            );
            if (isPointInPolygon === true) POI.push(category.coordinates);
        }

        for (const network of networks) {
            const isPointInPolygon = geolib.isPointInPolygon(
                { lat: network.coordinates.lat, lon: network.coordinates.lon },
                polygon.waypoints,
            );
            if (isPointInPolygon === true) POI.push(network.coordinates);
        }

        const finalRoute = geolib.orderByDistance(departure, POI);

        const geoJson = {
            waypoints: {
                departure: [req.body.location.Long, req.body.location.Lat],
                arrival: [req.body.arrival.Long, req.body.arrival.Lat],
            },
            userInfo: {
                car: visitorCar,
                departureAddress: req.body.location.label,
                arrivalAddress: req.body.arrival.label,
                categories : visitorCategory
            },
            road: undefined,
        };
        geoJson.road = finalRoute.map((coord) => {
            const intRes = interesting.find(
                (interet) => JSON.stringify(interet.coordinates) === JSON.stringify(coord),
            );
            if (intRes) {
                return {
                    type: "Feature",
                    borne: false,
                    properties: {
                        image: `https://eco-roads.herokuapp.com/images/${intRes.image}`,
                        title: intRes.name,
                        adresse: intRes.label,
                        icon: intRes.icon,
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [intRes.coordinates.lon, intRes.coordinates.lat],
                    },
                };
            }

            const netRes = networks.find(
                (network) => JSON.stringify(network.coordinates) === JSON.stringify(coord),
            );
            if (netRes) {
                return {
                    type: "Feature",
                    borne: true,
                    properties: {
                        title: netRes.name,
                        adresse: netRes.label,
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [netRes.coordinates.lon, netRes.coordinates.lat],
                    },
                };
            }
        });
        geoJson.road.pop();

        return res.status(200).json(geoJson);
    } catch (err) {
        _500(err, req, res);
    }
}

export { createMap };
