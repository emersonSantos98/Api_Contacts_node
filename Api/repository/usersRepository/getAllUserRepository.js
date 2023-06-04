const database = require('../../models');

module.exports = class GetAllUserRepository {
    async getAllUserRepository() {
            const allUsers = await database.Users.findAll();
            return allUsers;
    }
}
