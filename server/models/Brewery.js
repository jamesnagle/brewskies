const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let brewerySchema = new Schema({
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
    postalCode: Number,
    province: String,
    twitter: String,
    websites: String
}, {collection: 'breweries'});

brewerySchema.statics.getAll = function(cb) {
    return this.find({}, cb);
}

brewerySchema.statics.getByZipcode = function (zipcode, cb) {
    return this.find({postalCode: zipcode}, cb);
}

brewerySchema.statics.getByState = function (code, cb) {
    return this.find({province: code }, cb);
}

const Brewery = mongoose.model('Brewery', brewerySchema);

module.exports = Brewery;