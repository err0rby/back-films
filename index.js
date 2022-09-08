require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./routes/actors.route'));
app.use(require('./routes/comments.route'));
app.use(require('./routes/films.route'));
app.use(require('./routes/janres.route'));
app.use(require('./routes/tegs.route'));
app.use(require('./routes/users.route'));

const start = async () => {
    try {
        mongoose.connect(process.env.MONGOS);
        console.log('Base');
    } catch (error) {
        console.log('Base error');
    }
}

app.listen(process.env.PORT, () => {
    console.log('Подключились к серверу');
})

start();