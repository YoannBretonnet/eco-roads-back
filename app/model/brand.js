//~ IMPORTATION BRAND DATA
import { findAll, findOne, createData, updateData, deleteData } from "../datamapper/brand.js";

class Brand {
    static async findAllBrands() {
        return findAll();
    }

    static async findOneBrand(brandId) {
        return findOne(brandId);
    }

    static async createBrand(brandData) {
        return createData(brandData);
    }

    static async updateBrand(brandId, brandData) {
        return updateData(brandId, brandData);
    }

    static async deleteBrand(brandId) {
        return deleteData(brandId);
    }
}

export { Brand };