const database = require('../../models')


class GroupsController {
    static async getGroupsAll(req, res){
        try {
            const allGroups = await database.Groups.findAll()
            return res.status(200).json(allGroups)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getGroupsById(req, res){
        console.log('res', res)
        console.log('req', req)
        try {
            const {id} = req.params
            const Group = await database.Groups.findOne({where: {id: Number(id)}})
            return res.status(200).json(Group)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createGroups(req, res) {
        try {
            const newGroups= req.body
            const createdGroups= await database.Groups.create(newGroups)
            return res.status(200).json(createdGroups)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateGroups(req, res) {
        try {
            const {id} = req.params
            const newGroups = req.body
            await database.Groups.update(newGroups, {where: {id: Number(id)}})
            const updatedGroups = await database.Groups.findOne({where: {id: Number(id)}})
            return res.status(200).json(updatedGroups)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteGroups(req, res) {
        try {
            const {id} = req.params
            await database.Groups.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `id ${id} deletado`})

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = GroupsController
