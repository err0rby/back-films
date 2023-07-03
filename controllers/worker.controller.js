const Worker = require('../models/Worker.model');

module.exports.workerController = {
    getWorker: async (req, res) => {
        try {
            const data = await Worker.find({});
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    addWorker: async (req, res) => {
        try {
            const { firstName, lastName, workName } = req.body;
            const data = await Worker.create({
                firstName,
                lastName,
                workName
            });
            res.json(data);
        } catch (error) {
            res.json(error)
        }
    }
}