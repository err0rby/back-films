const Film = require('../models/Film.model');

module.exports.filmsController = {
    addFilm: async (req, res) => {
        const { image, name, year, discription, janres, actors, tegs, comments } = req.body;
        try {
            const data = await Film.create({
                image,
                name,
                janres,
                comments,
                actors,
                discription,
                year,
                tegs,
                workers
            });
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    allFilms: async (req, res) => {
        try {
            const data = await Film.find().populate('actors tegs janres workers');
            res.json(data);
        } catch (error) {
            res.json(error)
        }
    }
}