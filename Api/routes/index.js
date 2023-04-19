const usersRouter = require('./users.routes')
const contactsRouter = require('./contacts.routes')
const groupsRouter = require('./groups.routes')
const router = require("express").Router();



router.use('/users', usersRouter);
router.use('/contacts', contactsRouter);
router.use('/groups', groupsRouter);

module.exports = router
