const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    text: String,
    film: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Film'
    },
    watch: {
        type: Date,
        default: Date.now,
    },
    likes: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'
        }
    ]
})

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;