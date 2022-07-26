//~ IMPORTATION ERROR

import { _400, _404, _500 } from "./errorController.js";
import { Category } from "../model/category.js";

//~ FUNCTIONS

//~---------------------------------------FETCH ALL CATEGORY

async function fetchAllCategories(req, res) {
    try {
        const category = await Category.findAllCategories();
        
        if (category) res.status(200).json(category);
        else throw new Error(`Aucune categorie n'a été trouvé`);
    } catch (err) {
        _500(err, req, res);
    }
}

//~---------------------------------------FETCH ONE CATEGORY

async function fetchOneCategory(req, res) {
    try {
        const categoryId = +req.params.id;

        const category = await Category.findOneCategory(categoryId);

        if (category) res.status(200).json(category);
        else throw new Error(`La catégorie n'existe pas`);
    } catch (err) {
        _500(err, req, res);
    }
}

// //~---------------------------------------CREATE CATEGORY

// async function createCategory(req, res) {
//     try {
         // Les vérifications sont faites grâce a Joi et ses schémas
//         await Category.createCategory(req.body);

//         return res.status(200).json(`Le véhicule a bien été créé`);
//     } catch (err) {
//         _500(err, req, res);
//     }
// }

// //~----------------------------------------UPDATE Category

// async function updateCategory(req, res) {
//     try {
//         const CategoryId = +req.params.id;

//         let CategoryInfo = await Category.findOneCategory(CategoryId);

//         for (const key in CategoryInfo) {
//             req.body[key] ? req.body[key] : (req.body[key] = CategoryInfo[key]);
//         }

//         await Category.updateCategory(CategoryId, req.body);

//         return res.status(200).json(`Le véhicule a bien été modifié`);
//     } catch (err) {
//         _500(err, req, res);
//     }
// }

// //~-------------------------------------------DELETE Category

// async function deleteCategory(req, res) {
//     try {
//         const CategoryId = +req.params.id;
//         await Category.deleteCategory(CategoryId);

//         return res.status(200).json(`Le véhicule a bien été supprimé`);
//     } catch (err) {
//         _500(err, req, res);
//     }
// }

export { fetchAllCategories, fetchOneCategory };
