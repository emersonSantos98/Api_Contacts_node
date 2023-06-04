const database = require('../../models')


class ContactsController {
    static async getContactsAll(req, res){
        try {
            const allContacts = await database.Contacts.findAll()
            return res.status(200).json(allContacts)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getContactsById(req, res){
        try {
            const {id} = req.params
            const Contacts = await database.Contacts.findOne({where: {id: Number(id)}})
            return res.status(200).json(Contacts)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createContacts(req, res) {
        try {
            const newContacts = req.body
            const createdContacts = await database.Contacts.create(newContacts)
            return res.status(200).json(createdContacts)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateContacts(req, res) {
        try {
            const {id} = req.params
            const newContacts = req.body
            await database.Contacts.update(newContacts, {where: {id: Number(id)}})
            const updatedContacts = await database.Contacts.findOne({where: {id:Number(id)}})
            return res.status(200).json(updatedContacts)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteContacts(req, res) {
        try {
            const {id} = req.params
            await database.Contacts.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `id ${id} deletado`})

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ContactsController
