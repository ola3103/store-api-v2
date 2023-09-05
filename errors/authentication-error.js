const CustomError = require("./custom-error");

class AuthenticationError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = AuthenticationError;
