const { Router } = require('express')
const router = Router();
const { janresController } = require('../controllers/janre.controller')

router.get('/janres', janresController.getAllJanre);
router.post('/janres', janresController.addJanre);

module.exports = router;