const mongoose = require('mongoose');

const janreSchema = mongoose.Schema({
    name: String,
})

const Janre = mongoose.model('Janre', janreSchema);
module.exports = Janre;