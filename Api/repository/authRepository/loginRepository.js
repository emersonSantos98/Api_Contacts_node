
const database = require('../../models');

class LoginRepository {
    async findByEmail(email) {
        const user = await database.Users.findOne({ where: { email } });
        console.log('userR', user)
        return user
    }
}

module.exports = LoginRepository;
