const usersRouter = require('./usersRoutes/users.routes')
const contactsRouter = require('./contactsRoutes/contacts.routes')
const groupsRouter = require('./groupsRoutes/groups.routes')
const authRouter = require('./authRoutes/auth.routes')
const roleRouter = require('./rolesRoutes/role.routes')
const router = require("express").Router();



router.use('/users', usersRouter);
router.use('/contacts', contactsRouter);
router.use('/groups', groupsRouter);
router.use('/auth', authRouter);
router.use('/role', roleRouter)

module.exports = router
