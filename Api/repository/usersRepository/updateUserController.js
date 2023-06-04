const database = require('../../models');

module.exports = class UpdateUserRepository {
    static async update(id, user) {
        try {
            await database.Users.update(user, {where: {id: Number(id)}})
            const updatedUser = await database.Users.findOne({where: {id: Number(id)}})
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }
}
