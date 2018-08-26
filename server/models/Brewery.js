const mongoose = require('mongoose');

const schema = mongoose.Schema({
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
});

const Brewery = mongoose.Model('Brewery', schema);

module.exports = Brewery;