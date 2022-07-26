import jwt from "jsonwebtoken";


function generateAccessToken(user) {
    // const jwtUser = {
    //     id: user.id,
    //     email: user.email,
    //     username: user.username
    // }
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "20s" });
}

function generateRefreshToken(user) {
    // const jwtUser = {
    //     id: user.id,
    //     email: user.email,
    //     username: user.username
    // }
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "36000s" });
}

export { generateAccessToken, generateRefreshToken };
