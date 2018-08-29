const BaseAPI = require('./BaseAPI');

class BreweriesAPI extends BaseAPI {
    constructor(ResponseTypeInterface, ErrorHandlerInterface, Model) {
        super(ResponseTypeInterface, ErrorHandlerInterface);
        this.Model = Model;
        this.getAll = this.getAll.bind(this);
        this.getByZipcode = this.getByZipcode.bind(this);
        this.getByState = this.getByState.bind(this);
    }

    getAll(req, res) {
        this.Model.getAll(function(err, data) {
            this.processResponse(err, data).send(res);
        }.bind(this));
    }

    getByZipcode(req, res) {
        const zipcode = parseInt(req.params.zip);
        this.Model.getByZipcode(zipcode, function(err, data) {
            this.processResponse(err, data).send(res);
        }.bind(this));
    }

    getByState(req, res) {
        this.Model.getByState(req.params.code, function(err, data) {
            this.processResponse(err, data).send(res);
        }.bind(this));
    }
}

module.exports = BreweriesAPI;