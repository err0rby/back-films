const { Router } = require('express')
const router = Router();
const { usersController } = require('../controllers/user.controller')

router.get('/users', usersController.getAllUsers);
router.post('/users', usersController.addUser);
router.post('/login', usersController.login);

module.exports = router;