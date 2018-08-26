const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    id: String,
    address: String,
    categories: String,
    city: String,
    country: String,
    hours: Array,
    keys: String,
    latitude: String,
    longitude: String,
    menus: Array,
    name: String,
    postalCode: String,
    province: String,
    twitter: String,
    websites: String
}, {collection: 'breweries'});

const Brewery = mongoose.model('Brewery', brewerySchema);

module.exports = Brewery;