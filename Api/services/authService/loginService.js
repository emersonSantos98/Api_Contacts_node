const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const LoginRepository = require('../../repository/authRepository/loginRepository');
const RoleService = require('../../services/roleService/roleService');
const jwtConfig = require('../../config/jwt');

class LoginService {
    constructor() {
        this.loginRepository = new LoginRepository();
        this.roleService = new RoleService();
        this.secretKey = jwtConfig.jwtConfig.secret;
        this.refreshSecretKey = jwtConfig.jwtConfig.refreshTokenSecret;
        this.expiresIn = jwtConfig.jwtConfig.expiresIn;
        this.refreshExpiresIn = jwtConfig.jwtConfig.refreshTokenExpiresIn;
    }

    async login(email, password) {
        const user = await this.loginRepository.findByEmail(email);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        const role = await this.roleService.getByIdRole(user.roleId);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Senha inválida');
        }

        const accessToken = jwt.sign({userId: user.id}, this.secretKey, {
            algorithm: 'HS256',
            expiresIn: this.expiresIn
        });
        const refreshToken = jwt.sign({userId: user.id}, this.refreshSecretKey, {
            algorithm: 'HS256',
            expiresIn: this.refreshExpiresIn
        });
        const userData = {
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            avatar: user.avatar,
            email: user.email,
            role: role.name
        };

        return {accessToken, refreshToken, userData};
    }
}

module.exports = LoginService;
