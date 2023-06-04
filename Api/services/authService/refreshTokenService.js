const RefreshTokenRepository = require('../../repository/authRepository/refreshTokenRepository');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwt');

class RefreshTokenService {
    constructor() {
        this.refreshTokenRepository = new RefreshTokenRepository();
        this.secretKey = jwtConfig.jwtConfig.secret;
        this.refreshSecretKey = jwtConfig.jwtConfig.refreshTokenSecret;
        this.expiresIn = jwtConfig.jwtConfig.expiresIn;
        this.refreshExpiresIn = jwtConfig.jwtConfig.refreshTokenExpiresIn;
    }


    refreshToken(refreshToken) {
        try {
            jwt.verify(refreshToken, this.refreshSecretKey);

            const decoded = jwt.decode(refreshToken);

            // Verificar se o refreshToken expirou ou é inválido

            const accessToken = jwt.sign({ userId: decoded.userId }, this.secretKey, { expiresIn: this.expiresIn, algorithm: 'HS256' });
            const newRefreshToken = jwt.sign({ userId: decoded.userId }, this.refreshSecretKey, { expiresIn: this.refreshExpiresIn, algorithm: 'HS256' });

            return { accessToken,  newRefreshToken };
        } catch (error) {
            throw new Error('Token inválido!');
        }
    }

}

module.exports = RefreshTokenService;
