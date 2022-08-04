import * as geolib from "geolib";

// const location = {
//     waypoints: [
//         {lat: 45.91020549987278, lon: 3.85015907722799},
//         {lat: 45.82789539610612, lon: 3.379567053251267},
//         {lat: 45.774354818648284, lon: 2.9625402250482518},
//         {lat: 45.80583354836458, lon: 3.139268880851213},
//         {lat: 45.76919610557668,lon: 3.0586159748494683},
//         {lat: 45.840472762485774, lon: 3.2148202138607007}
//         ]
// };

// const getDistance = geolib.getDistance({lat: 45.840472762485774, lon: 3.2148202138607007},{lat: 45.774354818648284, lon: 2.9625402250482518})
// console.log("🚀 ~ file: geolib.js ~ line 13 ~ getDistance", getDistance)

// const getCenterOfBounds = geolib.getCenterOfBounds(location.waypoints)
// console.log("🚀 ~ file: geolib.js ~ line 12 ~ result", getCenterOfBounds)

// const getBounds = geolib.getBounds(location.waypoints)
// console.log("🚀 ~ file: geolib.js ~ line 15 ~ getBounds", getBounds)

const isPointInPolygon = geolib.isPointInPolygon({ latitude: 45.804834, longitude: 3.08868 }, location.waypoints)
console.log("🚀 ~ file: geolib.js ~ line 18 ~ isPointInPolygon", isPointInPolygon)


const pA = { x: 3.1201759083541356, y: 45.78242891204897 };
const pB = { x: -0.5850747171316741, y: 44.83432990456446 };

const vecteur = { x: pB.x - pA.x, y: pB.y - pA.y };
// d est la distance entre pA et pB
const d = Math.sqrt(Math.pow(pB.x - pA.x, 2) + Math.pow(pB.y - pA.y, 2));

const r0 = 0.5;
const r1 = Math.sqrt(Math.pow(r0, 2) + Math.pow(d, 2));

// a est la distance entre pB et pC
const a = (Math.pow(r0, 2) - Math.pow(r1, 2) + Math.pow(d, 2)) / (2 * d);

const h = Math.sqrt(Math.pow(r0, 2) - Math.pow(a, 2));

// P2 est le point au centre du segment AB
const P2 = {
    x: pA.x + (a * (pB.x - pA.x)) / d,
    y: pA.y + (a * (pB.y - pA.y)) / d,
};

const x31 = P2.x + (h * (pA.y - pB.y)) / d;
const y31 = P2.y + (h * (pB.x - pA.x)) / d;

const x32 = P2.x - (h * (pA.y - pB.y)) / d;
const y32 = P2.y - (h * (pB.x - pA.x)) / d;

const pC = {
    x: x31,
    y: y31,
};

const pD = {
    x: x32,
    y: y32,
};

const pE = {
    x: x31 + vecteur.x,
    y: y31 + vecteur.y,
};

const pF = {
    x: x32 + vecteur.x,
    y: y32 + vecteur.y,
};

const polygon = {
    waypoints: [pC, pD, pE, pF]
} 
console.log(polygon)
console.log(polygon.waypoints);



const geoJson = [{
    type: "feature",
    properties:{
        "image": network.image,
        "title": network.name

    },
}]