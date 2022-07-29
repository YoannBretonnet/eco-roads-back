//~ IMPORTATION ERROR
import pool from "../service/dbClient.js";
import { _400, _404, _500 } from "./errorController.js";
import { User } from "../model/user.js";

import { generateAccessToken, generateRefreshToken } from "../utils/jwtToken.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import emailValidator from "email-validator";
import passwordValidator from "password-validator";

const schema = new passwordValidator();
const worthPassword = ["Passw0rd", "Password123", "Azerty", "Qwerty", "000000", "123456"];
schema
    .is()
    .min(6)
    .has()
    .uppercase(1)
    .has()
    .symbols(1)
    .has()
    .not()
    .spaces()
    .is()
    .not()
    .oneOf(worthPassword);
/* .is().max(100) // Maximum length 100
.has().lowercase(1) // Must have lowercase letters
.has().digits(2) // Must have at least 2 digits
.has().symbols(1) // Must have at least 1 symbol
.has().not().spaces() // Should not have spaces
.is().not().oneOf() */

// FUNCTIONS

// ------------------------------------------------------- FETCH ALL USERS
// ------------------------------------------------------------------------

async function fetchAllUsers(req, res) {
    try {
        const user = await User.findAllUsers();

        if (user) res.status(200).json(user);
        else throw new Error({ error: "Aucun utilisateur trouvé" });
    } catch (err) {
        _500(err, req, res);
    }
}

// ------------------------------------------------------- FETCH ONE USER
// -----------------------------------------------------------------------

async function fetchOneUser(req, res) {
    try {
        const userId = req.user.id;
        if (!userId) return res.status(401).json({ error: "Autorisation refusée" });

        // const user = await User.findOneUser(userId);
        const user = await User.findOneProfile(userId);

        if (user) res.status(200).json(user.rows[0]);
        else throw new Error({ error: "L'utilisateur n'existe pas" });
    } catch (err) {
        return _500(err, req, res);
    }
}

// ------------------------------------------------------- LOGIN USER
// -------------------------------------------------------------------

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        //~ verify if the email exists
        if (!email)
            return res.status(400).json({ error: "Merci de bien vouloir renseigner l'email" });
        //~ Checks if email is valid
        if (!emailValidator.validate(email))
            return res.status(401).json({ error: "L'email est incorrect" });

        const user = await User.findOneUser(email, "email");

        if (user.rowCount === 0) return res.status(401).json({ error: "L'email saisi est érroné" });

        //~ Checks password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) return res.status(401).json({ error: "Mot de passe incorrect" });

        console.log("Le user dans le controller c est :", user.rows[0]);

        //~ Create token JWT
        let accessToken = generateAccessToken(user.rows[0]);
        let refreshToken = generateRefreshToken(user.rows[0]);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: "none",
            secure: true, 
            maxAge : new Date(Date.now() + 999999999 )
        });

        res.status(200).json({ accessToken: accessToken });
    } catch (err) {
        return _500(err, req, res);
    }
}

// ------------------------------------------------------- LOGOUT USER
// --------------------------------------------------------------------

async function logoutUser(req, res) {
    try {
        const token = req.cookies.refreshToken;

        if (!token) return res.status(401).json({ error: "Token invalide" });

        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(401);
            }
            // Checks if the user exists and return json
            if (!user) return res.status(401).json({ error: "L'utilisateur n'existe pas" });

            delete user.iat;
            delete user.exp;
        });
    } catch (err) {
        _500(err, req, res);
    }
}

// ------------------------------------------------------- CREATE USER
// -------------------------------------------------------------------

async function createUser(req, res) {
    try {
        let { email, password, username, location, car_id, categories } = req.body;

        const locationExist = await pool.query(
            `SELECT * FROM location WHERE lat = ${location.Lat} AND lon = ${location.Long}`,
        );

        if (locationExist.rowCount !== 0) location = locationExist.rows[0].id;

        //  Search if the user is already in the database
        const user = await User.findOneUser(email, "email");

        if (user.rowCount !== 0) throw new Error(`${email} existe déjà.`);
        if (!emailValidator.validate(email))
            return res.status(500).json({ error: `L'email n'est pas valide.` });
        if (!schema.validate(password))
            return res.status(500).json({
                error: "Le mot de passe doit contenir au moins 6 caractères, une majuscule et un caractère spécial.",
            });
        if (!username)
            return res.status(500).json({ error: "Merci de renseigner un nom d'utilisateur" });

        const hashPassword = await bcrypt.hash(password, 10);

        const createdUser = {
            email,
            password: hashPassword,
            username,
            location,
            car_id,
            categories,
        };

        await User.createUser(createdUser);

        res.status(200).json({ error: "L'utilisateur a bien été créé" });
    } catch (err) {
        _500(err, req, res);
    }
}

// ------------------------------------------------------- UPDATE USER
// --------------------------------------------------------------------

async function updateUser(req, res) {
    try {
        const userId = req.user.id;
        console.log("🚀  line 187 ~ updateUser ~ userId", userId)
        let { email, username, password, location, car_id, categories } = req.body;
        console.log("🚀 line 188 ~ updateUser ~ req.body", req.body)

        let user = await User.findOneUser(userId, "id");
        console.log("🚀 ~ line 192 ~ updateUser ~ user", user)

        
        

        if (!user) return res.status(401).json({ error: "L'utilisateur n'existe pas" });

        if (!emailValidator.validate(email))
            return res.status(500).json({ error: `${email} invalide !` });

        if (!schema.validate(password))
            return res
                .status(500)
                .json({ error: "Le mot de passe doit contenir au moins 6 caractères." });

        if (!username)
            return res.status(500).json({ error: "Merci de renseigner un nom d'utilisateur" });

        const hashPassword = await bcrypt.hash(req.body.password, 10);

        const updatedUser = {
            email,
            password: hashPassword,
            username,
            location,
            car_id,
            categories,
        };

        await User.updateUser(userId, updatedUser);

        res.status(200).json({ error: "L'utilisateur a bien été mis à jour" });
    } catch (err) {
        _500(err, req, res);
    }
}

// ------------------------------------------------------- UPDATE USER
// --------------------------------------------------------------------

async function deleteUser(req, res) {
    try {
        const userId = req.user.id;
        console.log("🚀 ~ file: userController.js ~ line 235 ~ deleteUser ~ userId", userId)
        await User.deleteUser(userId);

        return res.status(200).json(`L'utilisateur a bien été supprimé`);
    } catch (err) {
        _500(err, req, res);
    }
}

// ------------------------------------------------------- REFRESH TOKEN
// ----------------------------------------------------------------------

async function refreshToken(req, res) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(401).json(`L'utilisateur n'existe pas`);
        }

        delete user.iat;
        delete user.exp;
        const refreshedAccessToken = generateAccessToken(user);

        res.status(200).json({ refreshedAccessToken: refreshedAccessToken });
    });
}

export {
    fetchAllUsers,
    fetchOneUser,
    loginUser,
    logoutUser,
    createUser,
    updateUser,
    deleteUser,
    refreshToken,
};
