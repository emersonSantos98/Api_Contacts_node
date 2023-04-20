 const GroupsController = require('../controllers/GroupsController')
const router = require("express").Router();

/**
 * @swagger
 * /api/v1/groups/getGroupsAll:
 *   get:
 *     summary: Retorna todos os Grupos
 *     tags:
 *       - Grupos
 *     responses:
 *       200:
 *         description: Lista de Grupos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *               $ref: '#/components/schemas/Groups'
 */
router.get("/getGroupsAll", GroupsController.getGroupsAll)


/**
 * @swagger
 * /api/v1/groups/getGroupsById/{id}:
 *   get:
 *     summary: Retorna um grupo específico
 *     tags:
 *       - Grupos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do grupo a ser retornado
 *     responses:
 *       200:
 *         description: Grupo retornado com sucesso
 *         content:
 *           application/json:
 *           schema:
 *           $ref: '#/components/schemas/Groups'
 */
router.get("/getGroupsById/:id", GroupsController.getGroupsById)


/**
 * @swagger
 * /api/v1/groups/createGroups:
 *   post:
 *     summary: Cria um novo grupo
 *     tags:
 *       - Grupos
 *     requestBody:
 *       description: Objeto de grupo a ser criado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Grupo criado com sucesso
 *         content:
 *           application/json:
 *       400:
 *         description: Requisição inválida
 *         $ref: '#/components/schemas/Groups'
 */
router.post("/createGroups", GroupsController.createGroups)


/**
 * @swagger
 * /api/v1/groups/updateGroups/{id}:
 *   put:
 *     summary: Atualiza um grupos existente
 *     tags:
 *       - Grupos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do grupos a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Objeto de grupos atualizado
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       200:
 *         description: Grupos atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Usuário não encontrado
 *         $ref: '#/components/schemas/Groups'
 */
router.put("/updateGroups/:id", GroupsController.updateGroups)


/**
 * @swagger
 * /api/v1/groups/deleteGroups/{id}:
 *   delete:
 *     summary: Remove um grupos existente
 *     tags:
 *       - Grupos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do grupo a ser removido
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Grupo removido com sucesso
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Grupo não encontrado
 *         $ref: '#/components/schemas/Groups'
 */
router.delete("/deleteGroups/:id", GroupsController.deleteGroups)

module.exports = router
