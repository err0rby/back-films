const {Router} = require('express');
const router = Router();
const {workerController} = require('../controllers/worker.controller');

router.get('/workers', workerController.getWorker);
router.post('/workadd', workerController.addWorker);

module.exports = router;