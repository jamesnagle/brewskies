const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('DB connected!');

    app.get('/', (req, res) => res.send('Hey James, Brewskies is indeed live!'));

    app.listen(3000, () => console.log('Listening on port 3000'));
});