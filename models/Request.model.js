const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    name: String,
    adress: String,
    number: String,
    work: String,
    worker: String,
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;