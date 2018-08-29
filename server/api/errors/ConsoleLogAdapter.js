const ErrorHandlerInterface = require('./ErrorHandlerInterface');

class ConsoleLogAdapter extends ErrorHandlerInterface {
    handleError(error) {
        console.log(error);
    }
}

module.exports = ConsoleLogAdapter;