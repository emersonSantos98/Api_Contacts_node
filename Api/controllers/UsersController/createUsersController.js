const CreateUsersService = require('../../services/usersServices/CreateUsers');

module.exports = class UsersController {
    async createUser(req, res) {
        try {
            const createUserService = new CreateUsersService();
            await createUserService.createUser(req.body);
            return res.status(200).json({ message: 'Usuário criado com sucesso' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
};
