const Teg = require('../models/Teg.model');

module.exports.tegsController = {
    addTeg: async (req, res) => {
        const { name } = req.body;
        try {
            const data = await Teg.create({
                name
            });
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    allTegs: async (req, res) => {
        try {
            const data = await Teg.find();
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }
}