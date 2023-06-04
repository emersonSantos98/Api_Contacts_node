const database = require('../../models');


module.exports = class getByIdUserRepository {
    static async execute(id) {
        try {
            const User = await database.Users.findOne({where: {id: Number(id)}})
            return User
        } catch (error) {
            return error.message
        }
    }
}
