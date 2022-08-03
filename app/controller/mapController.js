import { _400, _404, _500 } from "./errorController.js";
// import { Interesting } from "../model/interesting.js";
import { polygonArea } from "../utils/polygon.js";
import * as geolib from "geolib";

//~---------------------------------------CREATE MAP

async function createMap(req, res) {
    try {
        // recuperer les infos des modales via un req.body
        const { location, arrival, categories, car_id } = req.body;
        const departure = { lat: location.Lat, lng: location.Long };
        // const interestingByCategory = await Interesting.query(categories);
        // const networks = await Interesting.findAllNetworkByCar(car_id);
        const interestingByCategory = [
            { lat: 45.90216613254294, lon: 2.195625340575916 },
            { lat: 45.503190739986344, lon: 2.5691604907550336 },
            { lat: 45.05482024291084, lon: 1.0860062179850078 },
            { lat: 44.852676393329226, lon: -0.15544883996323436 },
            { lat: 46.16910434996179, lon: -0.06755821639167713 },
            { lat: 44.31276571453327, lon: 2.0967483890579137 },
            { lat: 44.31276571453327, lon: 2.0967483890579137 },
            { lat: 46.31276571453327, lon: 2.0967483890579137 },
            { lat: 44.31276571453327, lon: 3.0967483890579137 },
            { lat: 45.00613254294, lon: 1.195625340575916 },
            { lat: 45.242166132544, lon: 1.805625340575916 },
        ];
        const networks = [
            { lat: 45.80216613254294, lon: 2.195625340575916 },
            { lat: 45.403190739986344, lon: 2.5691604907550336 },
            { lat: 45.15482024291084, lon: 1.0860062179850078 },
            { lat: 44.952676393329226, lon: -0.15544883996323436 },
            { lat: 46.36910434996179, lon: -0.06755821639167713 },
            { lat: 44.51276571453327, lon: 2.0967483890579137 },
            { lat: 44.91276571453327, lon: 2.0967483890579137 },
            { lat: 47.31276571453327, lon: 2.0967483890579137 },
            { lat: 42.31276571453327, lon: 3.0967483890579137 },
            { lat: 45.100613254294, lon: 1.195625340575916 },
            { lat: 45.242166132544, lon: 1.805625340575916 },
        ];

        const polygon = polygonArea(location, arrival);

        // Generer le polygon de recherche via location.Lat, location.Long, arrival.Lat, arrival.Long

        // faire appel a la bdd pour selectionner les location lie au borne de recharge en fonction du vehicule et les locations liees au categories
        // "properties" : { image: poi.image || network.image, title : network.name || POI.name, address : location.label,  icon-image : network.icon || poi.icon },
        //  "geometry: { "type": "Point", "coordinates":[location.lon, location.lat]} WHERE NETWORK || WHERE CATEGORY"

        const POI = [{ lat: arrival.Lat, lon: arrival.Long}];
        console.log("🚀 ~ file: mapController.js ~ line 51 ~ createMap ~ POI", POI)

        for (const category of interestingByCategory) {
            const isPointInPolygon = geolib.isPointInPolygon(
                { lat: category.lat, lon: category.lon },
                polygon.waypoints,
            );
            if (isPointInPolygon === true) POI.push(category);
        }
        for (const network of networks) {
            const isPointInPolygon = geolib.isPointInPolygon(
                { lat: network.lat, lon: network.lon },
                polygon.waypoints,
            );
            if (isPointInPolygon === true) POI.push(network);
        }
        console.log("🚀 ~ file: mapController.js ~ line 37 ~ createMap ~ POI", POI);

        const finalRoute = geolib.orderByDistance(departure, POI)
        console.log("🚀 ~ file: mapController.js ~ line 69 ~ createMap ~ finalRoute", finalRoute)

        // checker si les locations filtrées sont dans le polygon si true, alors on push dans un array, si false on s'en bat les couilles
        // const departure = { lon: location.Long, lat: location.Lat }
        // console.log("🚀 ~ file: mapController.js ~ line 24 ~ createMap ~ departure", departure)

        // Les vérifications sont faites grâce a Joi et ses schémas
        // await Location.createMap(req.body);

        return res.status(200).json(`Le trajet a bien été créé`);
    } catch (err) {
        _500(err, req, res);
    }
}

export { createMap };
