const { Router } = require('express')
const router = Router();
const { tegsController } = require('../controllers/teg.controller')

router.get('/tegs', tegsController.allTegs);
router.post('/tegs', tegsController.addTeg);

module.exports = router;