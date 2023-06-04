const CreateUserRepository = require('../../repository/usersRepository/createUserRepository');
const VerifyUserService = require('../../services/usersServices/verifyUserService')
const bcrypt = require('bcrypt');

module.exports = class CreateUsersService {
    async createUser(user) {
        const verifyUserService = new VerifyUserService();
        if (!user.fullName || !user.username || !user.email || !user.password ) {
            throw new Error('Todos os campos são obrigatórios!');
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);
        const existingUser = await verifyUserService.verifyUser(user.email);

        if (existingUser) {
          throw new Error('Usuário já existe!');
        }

        const createUserRepository = new CreateUserRepository();
        return await createUserRepository.createUser({
            ...user,
            password: hashedPassword,
        });
    }
};
