const UsersController = require('../controllers/UsersController')
const router = require("express").Router();

/**
 * @swagger
 * api/v1/getUsersAll:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/getUsersAll", UsersController.getUsersAll)

module.exports = router
