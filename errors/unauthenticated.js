const { statusCode } = require("http-status-codes");
const CustomAPIError = require("./custom-error");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
