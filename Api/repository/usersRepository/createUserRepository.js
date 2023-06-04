const database = require('../../models');

module.exports = class CreateUserRepository {
    async createUser(newUser) {
        const result = await database.Users.create(newUser);
        return result;
    }
};
