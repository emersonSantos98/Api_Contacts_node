// const UsersController = require('../../controllers/UsersController')
const UsersController = require('../../controllers/UsersController/createUsersController')
const GetAllUsersController = require('../../controllers/UsersController/getAllUsersController')
const router = require("express").Router();

/**
 * @swagger
 * /api/v1/usersRoutes/getUsersAll:
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
router.get("/getUsersAll", new GetAllUsersController().getAllUsersController)

//
// /**
//  * @swagger
//  * /api/v1/usersRoutes/getUserById/{id}:
//  *   get:
//  *     summary: Retorna um usuário específico
//  *     tags:
//  *       - Usuários
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: ID do usuário
//  *     responses:
//  *       200:
//  *         description: Usuário
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/User'
//  */
// router.get("/getUserById/:id", UsersController.getUserById)


/**
 * @swagger
 * /api/v1/usersRoutes/createUser:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Usuários
 *     requestBody:
 *       description: Objeto de usuário a ser criado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Requisição inválida
 */
router.post("/createUser", new UsersController().createUser)


// /**
//  * @swagger
//  * /api/v1/usersRoutes/updateUser/{id}:
//  *   put:
//  *     summary: Atualiza um usuário existente
//  *     tags:
//  *       - Usuários
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID do usuário a ser atualizado
//  *         schema:
//  *           type: integer
//  *     requestBody:
//  *       description: Objeto de usuário atualizado
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/User'
//  *     responses:
//  *       200:
//  *         description: Usuário atualizado com sucesso
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/User'
//  *       400:
//  *         description: Requisição inválida
//  *       404:
//  *         description: Usuário não encontrado
//  */
// router.put("/updateUser/:id", UsersController.updateUser)
//
//
// /**
//  * @swagger
//  * /api/v1/usersRoutes/deleteUser/{id}:
//  *   delete:
//  *     summary: Remove um usuário existente
//  *     tags:
//  *       - Usuários
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID do usuário a ser removido
//  *         schema:
//  *           type: integer
//  *     responses:
//  *       200:
//  *         description: Usuário removido com sucesso
//  *       400:
//  *         description: Requisição inválida
//  *       404:
//  *         description: Usuário não encontrado
//  */
// router.delete("/deleteUser/:id", UsersController.deleteUser)

module.exports = router
