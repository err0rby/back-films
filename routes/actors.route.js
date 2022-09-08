const { Router } = require('express');
const router = Router();
const { actorsController } = require('../controllers/actor.controller');

router.get('/actors', actorsController.getAllActors);
router.post('/actors', actorsController.addActor);

module.exports = router;