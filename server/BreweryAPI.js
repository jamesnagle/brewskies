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
    getByZipcode(req, res) {
        let zipcode = parseInt(req.params.zip);
        console.log(zipcode);
        
        Brewery.find({postalCode: zipcode}, function(err, breweries) {
            if (err) return this.handleErrors(err);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(breweries));            
        });
    }

    getByState(req, res) {
        let state = req.params.state;
        console.log(state);
        
        Brewery.find({province: state}, function(err, breweries) {
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