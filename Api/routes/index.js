const userRouter = require('./user.routes')
const router = require("express").Router();



router.use('/', userRouter);

module.exports = router
