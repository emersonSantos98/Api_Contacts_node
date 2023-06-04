const database = require('../../models');

module.exports = class DeleteUserRepository {
    async delete(id) {
        try {
            await database.Users.destroy({where: {id: Number(id)}})
            return {message: `id ${id} deletado`}
        } catch (error) {
            throw error;
        }
    }
}
