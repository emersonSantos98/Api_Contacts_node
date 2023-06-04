const router = require('express').Router()
const RoleController = require('../../controllers/RoleController/RoleController')


router.get('/role', new RoleController().getAllRole)
router.get('/role/:id', new RoleController().getByIdRole)
router.post('/role', new RoleController().createRole)
router.put('/role/:id', new RoleController().updateRole)
router.delete('/role/:id', new RoleController().deleteRole)

module.exports = router
