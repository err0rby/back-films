const mongoose = require('mongoose');

const tegSchema = mongoose.Schema({
    name: String,
})

const Teg = mongoose.model('Teg', tegSchema);
module.exports = Teg;