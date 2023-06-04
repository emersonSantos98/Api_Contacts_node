const RefreshTokenService = require('../../services/authService/refreshTokenService');


class RefreshTokenController {
    constructor() {
        this.refreshTokenService = new RefreshTokenService();
        this.refreshToken = this.refreshToken.bind(this);
    }

    async refreshToken(req, res) {
        try {
            const { refreshToken } = req.body;
            const { accessToken, newRefreshToken } = this.refreshTokenService.refreshToken(refreshToken);

            return res.status(200).json({ accessToken, refreshToken: newRefreshToken });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = RefreshTokenController;
