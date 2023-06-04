const database = require('../../models');


class RoleRepository {

    async getAllRole() {
       return await database.Role.findAll()

    }

    async getByIdRole(id) {
        return await database.Role.findOne({where: {id: Number(id)}})
    }

    async createRole(data) {
        const result = await database.Role.create(data);
        return result;
    }

    async updateRole(id, data) {
        await database.Role.update(data, {where: {id: Number(id)}})
        const updatedRole = await database.Role.findOne({where: {id: Number(id)}})
        return updatedRole;
    }

    async deleteRole(id) {
       return await database.Role.destroy({where: {id: Number(id)}})
    }

}

module.exports = RoleRepository
