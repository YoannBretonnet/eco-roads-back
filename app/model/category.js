//~ IMPORTATION CAR DATA
import { findAll, findOne, updateData, findCategoryByUser } from "../datamapper/category.js";

class Category {
    static async findAllCategories() {
        return findAll();
    }

    static async findOneCategory(categoryId) {
        return findOne(categoryId);
    }

    static async 

    static async updateCategories(categories, userId) {
        return updateData(categories, userId)
    }

    static async findUserCategories(userId) {
        return findCategoryByUser(userId);
    }
}

export { Category };