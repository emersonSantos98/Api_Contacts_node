const RoleRepository = require('../../repository/roleRepository/roleRepository')




class RoleServices {

    constructor() {
        this.roleRepositorys = new RoleRepository()
    }

    async getAllRole(){
     try {
        return await this.roleRepositorys.getAllRole()
     } catch (error) {
         return error
     }
    }

    async getByIdRole(id){
      try {
        return await this.roleRepositorys.getByIdRole(id)
      } catch (error) {
          return error
      }
    }

    async createRole(data){
        try {
            return await this.roleRepositorys.createRole(data)
        } catch (error) {
            return error
        }
    }

    async updateRole(id, data){
        try {
            return await this.roleRepositorys.updateRole(id, data)
        } catch (error) {
            return error
        }
    }
    async deleteRole(id){
        try {
            return await this.roleRepositorys.deleteRole(id)
        } catch (error) {
            return error
        }
    }

}
module.exports = RoleServices
