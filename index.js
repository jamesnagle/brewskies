const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/brews');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

import BreweryAPI from './server/BreweryAPI';

db.once('open', function() {
    app.use(express.static('client/public'));

    const api = new BreweryAPI(mongoose);

    app.get('/api/breweries', api.getAll);

    app.listen(3000, () => console.log('Listening on port 3000'));
});