const RoleServices = require('../../services/roleService/roleService')


class RoleControllers {

    constructor() {
        this.roleServices = new RoleServices()
        this.getAllRole = this.getAllRole.bind(this)
        this.getByIdRole = this.getByIdRole.bind(this)
        this.createRole = this.createRole.bind(this)
        this.updateRole = this.updateRole.bind(this)
        this.deleteRole = this.deleteRole.bind(this)

    }

    async getAllRole(req, res) {
        try {
            const result = await this.roleServices.getAllRole()
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getByIdRole(req, res) {
        const {id} = req.params
        try {
            const result = await this.roleServices.getByIdRole(id)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async createRole(req, res) {
        const {body} = req
        try {
            const result = await this.roleServices.createRole(body)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async updateRole(req, res) {
        const {body} = req
        const {id} = req.params
        try {
            const result = await this.roleServices.updateRole(id, body)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async deleteRole(req, res) {
        const {id} = req.params
        try {
            const result = await this.roleServices.deleteRole(id)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}


module.exports = RoleControllers
