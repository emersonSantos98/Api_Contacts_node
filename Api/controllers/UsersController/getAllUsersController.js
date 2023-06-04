const GetAllUsersService = require('../../services/usersServices/getAllUserService')

module.exports = class GetAllUsersController {
     async getAllUsersController(req, res) {
         const getAllUsersService = new GetAllUsersService()
        try {
            const getAllUsers = await getAllUsersService.getAllUser()
            return res.status(200).json(getAllUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

