const database = require('../models')


class UsersController {
    static async getUsersAll(req, res){
        try {
            const allUsers = await database.User.findAll()
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getUserById(req, res){
        try {
            const {id} = req.params
            const User = await database.User.findOne({where: {id: Number(id)}})
            return res.status(200).json(User)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUser(req, res) {
        try {
            const newUser = req.body
            const createdUser = await database.User.create(newUser)
            return res.status(200).json(createdUser)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUser(req, res) {
        try {
            const {id} = req.params
            const newUser = req.body
            await database.User.update(newUser, {where: {id: Number(id)}})
            const updatedUser = await database.User.findOne({where: {id: Number(id)}})
            return res.status(200).json(updatedUser)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteUser(req, res) {
        try {
            const {id} = req.params
            await database.User.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `id ${id} deletado`})

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsersController
