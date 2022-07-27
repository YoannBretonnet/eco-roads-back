import jwt from "jsonwebtoken";

function generateAccessToken(user) {
    let payload = { id: user.id, email: user.email, username: user.username };
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1800s" });
}

function generateRefreshToken(user) {
    let payload = { id: user.id, email: user.email, username: user.username };
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "36000s" });
}

export { generateAccessToken, generateRefreshToken };
