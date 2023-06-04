 const ContactsController = require('../../controllers/ContactsController/ContactsController')
const router = require("express").Router();

/**
 * @swagger
 * /api/v1/contactsRoutes/getContactsAll:
 *   get:
 *     summary: Retorna todos os contatos
 *     tags:
 *       - Contatos
 *     responses:
 *       200:
 *         description: Lista de contatos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contacts'
 */
router.get("/getContactsAll", ContactsController.getContactsAll)


/**
 * @swagger
 * /api/v1/contactsRoutes/getContactsById/{id}:
 *   get:
 *     summary: Retorna um contato  específico
 *     tags:
 *       - Contatos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do contato a ser retornado
 *     responses:
 *       200:
 *         description: Usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contacts'
 */
router.get("/getContactsById/:id", ContactsController.getContactsById )


/**
 * @swagger
 * /api/v1/contactsRoutes/createContacts:
 *   post:
 *     summary: Cria um novo contato
 *     tags:
 *       - Contatos
 *     requestBody:
 *       description: Objeto de contato a ser criado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Contato criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contacts'
 *       400:
 *         description: Requisição inválida
 */
router.post("/createContacts", ContactsController.createContacts)


/**
 * @swagger
 * /api/v1/contactsRoutes/updateContacts/{id}:
 *   put:
 *     summary: Atualiza um contato existente
 *     tags:
 *       - Contatos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contato a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Objeto de contato atualizado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contacts'
 *     responses:
 *       200:
 *         description: Contato atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Usuário não encontrado
 */
router.put("/updateContacts/:id", ContactsController.updateContacts)


/**
 * @swagger
 * /api/v1/contactsRoutes/deleteContacts/{id}:
 *   delete:
 *     summary: Remove um contato existente
 *     tags:
 *       - Contatos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contatos a ser removido
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contato removido com sucesso
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *         application/json:
 *         schema:
 *         $ref: '#/components/schemas/Contacts'
 */
router.delete("/deleteContacts/:id", ContactsController.deleteContacts )

module.exports = router
