class BaseAPI {
    constructor(ResponseInterface, ErrorHandlerInterface) {
        this.processResponse = this.processResponse.bind(this);
        this.send = this.send.bind(this);
        this.handleErrors = this.handleErrors.bind(this);

        this.responseHandler = new ResponseInterface();
        this.errorHandler = new ErrorHandlerInterface();
        
        this.contentType = this.responseHandler.contentType();
        this.response = [];
    }

    processResponse(err, data) {
        if (err) return this.handleErrors(err);
        this.response = this.responseHandler.formatResponse(data);
        return this;
    }
    send(res) {
        res.setHeader('Content-Type', this.contentType);
        res.send(this.response);
    }

    handleErrors(error_msg) {
        this.errorHandler.handleError(error_msg);
    }
}

module.exports = BaseAPI;