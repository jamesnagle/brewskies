const ResponseInterface = require('./ResponseInterface');

class JSONResponseAdapter extends ResponseInterface {
    contentType() {
        return 'application/json';
    }
    formatResponse(data) {
        return JSON.stringify(data);
    }
}

module.exports = JSONResponseAdapter;