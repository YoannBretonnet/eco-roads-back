//~ IMPORTATION CAR DATA
import { findAll, findOne, updateData } from "../datamapper/category.js";

class Category {
    static async findAllCategories() {
        return findAll();
    }

    static async findOneCategory(categoryId) {
        return findOne(categoryId);
    }

    static async updateCategories(categories, userId) {
        return updateData(categories, userId)
    }
}

export { Category };