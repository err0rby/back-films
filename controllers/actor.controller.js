const Actor = require('../models/Actor.model');

module.exports.actorsController = {
    addActor: async (req, res) => {
        const { name } = req.body;
        try {
            const data = await Actor.create({
                name
            });
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    getAllActors: async (req, res) => {
        try {
            const data = await Actor.find();
            res.json(data);
        } catch (error) {
            res.json(error)
        }
    }
}