const mongoose = require('mongoose');

const workerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    workName: String
});

const Worker = mongoose.model('Worker', workerSchema);
module.exports = Worker;