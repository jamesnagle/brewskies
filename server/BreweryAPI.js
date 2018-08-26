const Brewery = require('./models/Brewery');

class BreweryAPI {
    contructor(mongoose) {
        this.Mongoose = mongoose;
    }
    getAll(req, res) {
        Brewery.find({}, function(err, breweries) {
            if (err) return this.handleErrors(err);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(breweries));
        });
    }
    handleErrors(error) {
        console.log(error);
        return false;
    }
}
module.exports = BreweryAPI;