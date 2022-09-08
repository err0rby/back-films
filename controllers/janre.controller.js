const Janre = require('../models/Janre.model');

module.exports.janresController = {
    addJanre: async (req, res) => {
        const { name } = req.body;
        try {
            const data = await Janre.create({
                name
            })
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    getAllJanre: async (req, res) => {
        try {
            const data = await Janre.find();
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }
}