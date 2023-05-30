const { Router } = require('express');
const router = Router();
const { requestController } = require('../controllers/request.controller');

router.get('/requests', requestController.getRequest);
router.post('/request', requestController.addRequest);
router.delete('/request/:id', requestController.deleteRequest);

module.exports = router;