const LoginService = require('../../services/authService/loginService');

class LoginController {
    constructor() {
        this.loginService = new LoginService();
        this.login = this.login.bind(this); // Vincular o contexto do método login
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const { accessToken, refreshToken, userData } = await this.loginService.login(email, password);
            return res.status(200).json({ accessToken, refreshToken, userData });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = LoginController;
