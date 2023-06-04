const VerifyUserRepository = require('../../repository/usersRepository/verifyUserRepository');
module.exports = class VerifyUserService {
    verifyUserRepository = new VerifyUserRepository();
    async verifyUser(user) {
        const existingUser = await this.verifyUserRepository.getUserByEmail(user);
        return existingUser;
    }
}
