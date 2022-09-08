const mongoose = require('mongoose');

const actorSchema = mongoose.Schema({
    name: String,
})

const Actor = mongoose.model('Actor', actorSchema);
module.exports = Actor;