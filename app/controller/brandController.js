//~ IMPORTATION ERROR

import { _400, _404, _500 } from "./errorController.js";
import { Brand } from "../model/brand.js";

//~ FUNCTIONS

//~---------------------------------------FETCH ALL BRANDS


async function fetchAllBrands(req, res) {
    try {
        const brands = await Brand.findAllBrands();

        if (brands) res.status(200).json(brands);
        else throw new Error(`Aucun modèle n'a été trouvé`);
    } catch (err) {
        _500(err, req, res);
    }
}

//~---------------------------------------FETCH ONE BRAND

async function fetchOneBrand(req, res) {
    try {
        const brandId = +req.params.id;

        const brand = await Brand.findOneBrand(brandId);

        if (brand) res.status(200).json(brand);
        else throw new Error(`Le modèle n'existe pas`);
    } catch (err) {
        _500(err, req, res);
    }
}

//~---------------------------------------CREATE BRAND

async function createBrand(req, res) {
    try {
        // Les vérifications sont faites grâce a Joi et ses schémas
        await Brand.createBrand(req.body);

        return res.status(200).json(`Le modèle a bien été créé`);
    } catch (err) {
        _500(err, req, res);
    }
}

//~----------------------------------------UPDATE BRAND

async function updateBrand(req, res) {
    try {
        const brandId = +req.params.id;

        let brandInfo = await Brand.findOneBrand(brandId);

        for (const key in brandInfo) {
            req.body[key] ? req.body[key] : (req.body[key] = brandInfo[key]);
        }

        await Car.updateBrand(brandId, req.body);

        return res.status(200).json(`Le modèle a bien été modifié`);
    } catch (err) {
        _500(err, req, res);
    }
}

//~-------------------------------------------DELETE BRAND

async function deleteBrand(req, res) {
    try {
        const brandId = +req.params.id;
        await Brand.deleteBrand(brandId);

        return res.status(200).json(`Le modèle a bien été supprimé`);
    } catch (err) {
        _500(err, req, res);
    }
}

export { fetchAllBrands, fetchOneBrand, createBrand, updateBrand, deleteBrand };