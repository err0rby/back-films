const Request = require('../models/Request.model');

module.exports.requestController = {
    addRequest: async (req, res) => {
        try {
            const { name, number, adress, work } = req.body;
            const data = await Request.create({
                name,
                number,
                adress,
                work,
            });
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    getRequest: async(req,res) => {
        try {
            const data = await Request.find({});
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    deleteRequest: async(req,res) => {
        try {
            const data = await Request.findByIdAndDelete(req.params.id);
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }
}