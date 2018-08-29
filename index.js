const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/brews');
mongoose.set('debug', true);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const BreweriesAPI = require('./server/api/BreweriesAPI');
const responseAdapter = require('./server/api/responses/JSONResponseAdapter');
const errorHandlerAdaptor = require('./server/api/errors/ConsoleLogAdapter');
const breweryModel = require('./server/models/Brewery');

db.once('open', function() {
    app.use(express.static('client/public'));

    const api = new BreweriesAPI(responseAdapter, errorHandlerAdaptor, breweryModel);

    app.get('/api/breweries', api.getAll);

    app.get('/api/state/:code', api.getByState);

    app.get('/api/zipcode/:zip', api.getByZipcode);

    app.listen(3000, () => console.log('Listening on port 3000'));
});