const GetAllUserRepository = require('../../repository/usersRepository/getAllUserRepository')


module.exports = class GetAllUsersService {
     async getAllUser() {
        const getAllUserRepository = new GetAllUserRepository()
        const getAllUser = await getAllUserRepository.getAllUserRepository()
        return getAllUser
    }
}
