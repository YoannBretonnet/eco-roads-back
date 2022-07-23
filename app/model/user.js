//~ IMPORTATION User DATA
import { findAll, findOne, createData, updateData, deleteData } from "../datamapper/user.js";

class User {
    static async findAllUsers() {
        return findAll();
    }

    static async findOneUser(email, COLUMN_NAME) {
        return findOne(email, COLUMN_NAME);
    }

    static async createUser(userData) {
        return createData(userData);
    }

    static async updateUser(userId, userData) {
        return updateData(userId, userData);
    }

    static async deleteUser(userId) {
        return deleteData(userId);
    }
}

export { User };