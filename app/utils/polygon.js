export function polygonArea(location, arrival) {

const pA = { x: location.Long, y: location.Lat};
const pB = { x: arrival.Long, y: arrival.Lat };

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

const A = {
    lat: y31 + vecteur.y,
    lon: x31 + vecteur.x,
};

const B= {
    lat: y32 + vecteur.y,
    lon: x32 + vecteur.x,
};
const C = {
    lat: y32,
    lon: x32,
};
const D = {
    lat: y31,
    lon: x31,
};


const polygon = {
    waypoints: [ A, B, C, D ]
} 
console.log("🚀 ~ file: polygon.js ~ line 52 ~ polygonArea ~ polygon", polygon)

return polygon
}