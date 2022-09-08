const { Router } = require('express')
const router = Router();
const { commentsController } = require('../controllers/comment.controller')
const authMiddleware = require('../middleware/authMiddleware');

router.get('/comments', commentsController.getAllComments);
router.post('/comments', authMiddleware,commentsController.addComment);
router.delete('/comments/:id', commentsController.deleteComm);
router.patch('/comments/:id', commentsController.addLike);
router.patch('/comments/del/:id', commentsController.deleteLike);

module.exports = router;