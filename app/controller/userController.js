//~ IMPORTATION ERROR

import { _400, _404, _500 } from "./errorController.js";
import { User } from "../model/user.js";

import jwt from 'jsonwebtoken';
import { jwtTokens } from '../utils/jwtToken.js';

import bcrypt from "bcrypt";

import emailValidator from 'email-validator';
import passwordValidator from 'password-validator';

const schema = new passwordValidator();
schema.is().min(4)
/* .is().max(100) // Maximum length 100
.has().uppercase(1) // Must have uppercase letters
.has().lowercase(1) // Must have lowercase letters
.has().digits(2) // Must have at least 2 digits
.has().symbols(1) // Must have at least 1 symbol
.has().not().spaces() // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123', '123456', 'Azerty', 'Qwerty']) */

//~ FUNCTIONS

//~---------------------------------------FETCH ALL USERS

async function fetchAllUsers() {
    try {
        const user = await User.findAllUsers();

        if (user) res.status(200).json(user);
        else throw new Error("Aucun utilisateur trouvé");
    } catch (err) {
        _500(err, req, res);
    }
}

async function fetchOneUser(req, res) {
    try {
        const userId = +req.params.id;
        if(isNaN(userId)) return _500(err, req, res)

        const user = await User.findOneCar(userId);


        if (user) res.status(200).json(user);
        else throw new Error(`L'utilisateur n'existe pas`);
    } catch (err) {
        _500(err, req, res);
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        if (!emailValidator.validate(email)) return _500(err, req, res);

        const user = await User.findOneUser(email);
        if (user.rows.length === 0) return res.status(401).json({ error: "L'email saisi est érroné" });


        //* Password check
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        //* JWT
        let tokens = jwtTokens(user.rows[0]);
        res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true });
        res.json(tokens);

        //* VOIR POUR RENMVOYER LES DATA USER LORS DU LOGIN /
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

async function createUser() {}

async function updateUser(user) {}

async function deleteUser(user) {}

export { fetchAllUsers, fetchOneUser, loginUser, createUser, updateUser, deleteUser };
