const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

exports.verifyRefreshToken = (req, res, next) => {
    const { refreshToken } = req.body;
    console.log('middleware', refreshToken)

    if (!refreshToken) {
        return res.status(401).json({ msg: "Acesso negado" });
    }

    try {
        jwt.verify(refreshToken, jwtConfig.jwtConfig.refreshTokenSecret);
        next();
    } catch (error) {
        res.status(403).json({ msg: "Token inválido!" });
    }
};



exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Acesso negado" });
    }

    try {
        // Verificar o formato do token
        const tokenParts = token.split(".");
        if (tokenParts.length !== 3) {
            return res.status(403).json({ msg: "Token inválido!" });
        }

        const [header, payload, signature] = tokenParts;
        console.log('header', header)
        console.log('payload', payload)
        console.log('signature', signature)

        // Verificar a assinatura e algoritmo
        jwt.verify(token, jwtConfig.jwtConfig.secret, { algorithms: ['HS256'] });

        // Verificar o tempo de expiração do token
        const decoded = jwt.decode(token);
        if (decoded.exp < Date.now() / 1000) {
            return res.status(403).json({ msg: "Token expirado!" });
        }

        next();
    } catch (error) {
        res.status(403).json({ msg: "Token inválido!" });
    }
};

