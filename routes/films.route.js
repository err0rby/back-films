const { Router } = require('express')
const router = Router();
const { filmsController } = require('../controllers/film.controller')

router.get('/films', filmsController.allFilms);
router.post('/films', filmsController.addFilm);

module.exports = router;