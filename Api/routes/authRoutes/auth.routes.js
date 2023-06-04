const router = require("express").Router();
const LoginController = require("../../controllers/authController/loginController");
const RefreshTokenController = require("../../controllers/AuthController/refreshTokenController");
const {verifyRefreshToken, authenticateToken} = require("../../middlewares/authMiddleware");

/**
 * @swagger
 * /api/v1/auth/login:
 * post:
 *  summary: Autentica um usuário
 *  tags:
 *    - Autenticação
 *    requestBody:
 *    description: Objeto de usuário a ser autenticado
 *    required: true
 *    content:
 *    application/json:
 *    schema:
 *    $ref: '#/components/schemas/Login'
 *    responses:
 *    200:
 *    description: Usuário autenticado
 *    content:
 */

router.post("/login", new LoginController().login );

router.post("/refresh-token", verifyRefreshToken, new RefreshTokenController().refreshToken);

router.get("/authenticateToken", authenticateToken, (req, res) => {
    res.status(200).json({ msg: "Token válido!" });

});


module.exports = router
