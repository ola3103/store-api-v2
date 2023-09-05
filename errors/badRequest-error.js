const CustomError = require("./custom-error");

class BadResquest extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadResquest;
