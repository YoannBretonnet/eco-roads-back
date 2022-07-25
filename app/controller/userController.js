//~ IMPORTATION ERROR

import { _400, _404, _500 } from "./errorController.js";
import { User } from "../model/user.js";

import { generateAccessToken, generateRefreshToken } from "../utils/jwtToken.js";

import bcrypt from "bcrypt";

import emailValidator from "email-validator";
import passwordValidator from "password-validator";

const schema = new passwordValidator();
const worthPassword = ["Passw0rd", "Password123", "Azerty", "Qwerty", "000000", "123456"];
schema.is().min(6).is().not().oneOf(worthPassword);
/* .is().max(100) // Maximum length 100
.has().uppercase(1) // Must have uppercase letters
.has().lowercase(1) // Must have lowercase letters
.has().digits(2) // Must have at least 2 digits
.has().symbols(1) // Must have at least 1 symbol
.has().not().spaces() // Should not have spaces
.is().not().oneOf() */

// FUNCTIONS

// ------------------------------------------------------- FETCH ALL USERS
// ------------------------------------------------------------------------

async function fetchAllUsers(req, res) {
    console.log("hello world");
    try {
        const user = await User.findAllUsers();

        if (user) res.status(200).json(user);
        else throw new Error("Aucun utilisateur trouvé");
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

        const user = await User.findOneUser(userId, "id");

        if (user) res.status(200).json(user.rows[0]);
        else throw new Error(`L'utilisateur n'existe pas`);
    } catch (err) {
        return _500(err, req, res);
    }
}

// ------------------------------------------------------- LOGIN USER
// -------------------------------------------------------------------

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        console.log("🚀 ~~ password", password);
        console.log("🚀  ~ loginUser ~ email", email);
        //~ Checks if email is valid

        if (!emailValidator.validate(email))
            return res.status(401).json({ error: "L'email est incorrect" });

        const user = await User.findOneUser(email, "email");
        console.log(
            "🚀 ~ file: userController.js ~ line 70 ~ loginUser ~ user",
            user.rows[0].password,
        );

        if (user.rowCount === 0) return res.status(401).json({ error: "L'email saisi est érroné" });

        //~ Checks password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        console.log("🚀 line 78 ~ loginUser ~ validPassword", validPassword);

        if (!validPassword) return res.status(401).json({ error: "Mot de passe incorrect" });

        // create token JWT
        let accessToken = generateAccessToken(user.rows[0]);
        let refreshToken = generateRefreshToken(user.rows[0]);

        res.cookie("refreshToken", refreshToken, { httpOnly: true });
        res.json({ accesToken: accessToken });
    } catch (err) {
        return _500(err, req, res);
    }
}

// ------------------------------------------------------- LOGOUT USER
// --------------------------------------------------------------------

async function logoutUser(req, res) {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (!token) {
            return res.sendStatus(401);
        }

        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(401);
            }

            // Checks if the user exists and return json
            if (!user) return res.status(401).json(`L'utilisateur n'existe pas`);

            delete user.iat;
            delete user.exp;
        });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
}

// ------------------------------------------------------- CREATE USER
// -------------------------------------------------------------------

async function createUser(req, res) {
    try {
        let { email, password, username } = req.body;
        // let { email, password, username, departSelected, car, category } = req.body;

        //  Search if the user is already in the database
        const user = await User.findOneUser(email);

        // Checks if the user already exists and checks with emailValidator and passwordValidator
        if (user) throw new Error(`${email} existe déjà`);
        if (!emailValidator.validate(email))
            return res.status(500).json({ message: `${email} invalide !` });
        if (!schema.validate(password))
            return res
                .status(500)
                .json({ message: "Le mot de passe doit contenir au moins 6 caractères." });
        if (!username)
            return res.status(500).json({ message: "Merci de renseigner un nom d'utilisateur" });

        // If validation ok, defined a value null for columns not obligatories
        // location_id === undefined ? (location_id = 1 ) : location_id;
        // car_id === undefined ? (car_id = 1) : car_id;

        const hashPassword = await bcrypt.hash(password, 10);

        const createdUser = {
            email,
            password: hashPassword,
            username,
            // address,
            // car,
            // category
        };

        // const userAddress = {
        //     address: departSelected.adress,
        //     street_number: departSelected.street_number,
        //     zipcode: departSelected.zipcode,
        //     city: departSelected.city,
        //     lat: departSelected.lat,
        //     lon: departSelected.lon
        // };

        // const userCar = {
        //     car_id: car.
        // }

        await User.createUser(createdUser);

        res.status(200).json({ message: "L'utilisateur a bien été créé" });
    } catch (err) {
        _500(err, req, res);
    }
}

// ------------------------------------------------------- UPDATE USER
// --------------------------------------------------------------------

async function updateUser(req, res) {
    try {
        const userId = +req.user.id;
        let userInfo = await User.findOneUser(userId);

        for (const key in userInfo) {
            req.body[key] ? req.body[key] : (req.body[key] = userInfo[key]);
        }

        await User.updateUser(userId, userInfo);

        res.status(200).json({ message: "L'utilisateur a bien été mis à jour" });
    } catch (error) {
        _500(err, req, res);
    }
}

// ------------------------------------------------------- UPDATE USER
// --------------------------------------------------------------------

async function deleteUser(req, res) {
    try {
        const userId = +req.user.id;
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
            return res.sendStatus(401);
        }

        // Checks if the user exists and return json
        if (!user) return res.status(401).json(`L'utilisateur n'existe pas`);

        delete user.iat;
        delete user.exp;
        const refreshedToken = generateAccessToken(user);
        res.json({
            accessToken: refreshedToken,
        });
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
