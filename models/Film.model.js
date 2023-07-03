const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    image: String,
    name: String,
    year: String,
    discription: String,
    workers: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Worker'
        }
    ],
    janres: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Janre'
        }
    ],
    actors: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Actor'
        }
    ],
    tegs: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Teg'
        }
    ],
    comments: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Comment'
        }
    ]
})

const Film = mongoose.model('Film', filmSchema);
module.exports = Film;