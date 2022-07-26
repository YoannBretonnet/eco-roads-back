//~ IMPORTATION CAR DATA
import { findAll, findOne } from "../datamapper/category.js";

class Category {
    static async findAllCategories() {
        return findAll();
    }

    static async findOneCategory(categoryId) {
        return findOne(categoryId);
    }
}

export { Category };