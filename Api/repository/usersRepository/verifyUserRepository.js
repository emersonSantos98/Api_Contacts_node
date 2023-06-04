const database = require('../../models');
module.exports = class VerifyUserRepository {
    async getUserByEmail(email) {
        const user = await database.Users.findOne({ email });
        return user;
    }
}
