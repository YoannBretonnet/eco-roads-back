import jwt from "jsonwebtoken";


function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1800s" });
}

function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "36000s" });
}

export { generateAccessToken, generateRefreshToken };
