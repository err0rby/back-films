const Comment = require('../models/Comment.model');

module.exports.commentsController = {
    addComment: async (req, res) => {
        const { user, text, film, likes } = req.body
        try {
            const data = await Comment.create({
                user,
                text,
                film,
                likes
            });
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    getAllComments: async (req, res) => {
        try {
            const data = await Comment.find();
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    deleteComm: async (req, res) => {
        try {
            const data = await Comment.findByIdAndDelete(req.params.id);
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    addLike: async(req,res) => {
        try {
            const data = await Comment.findByIdAndUpdate(req.params.id, {$push: {likes: req.body.id}});
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    deleteLike: async(req,res) => {
        try {
            const data = await Comment.findByIdAndUpdate(req.params.id, {$pull: {likes: req.body.id}});
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }
}