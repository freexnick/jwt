const { statusCode } = require("http-status-codes");
const CustomAPIError = require("./custom-error");

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCode.BadRequest;
  }
}

module.exports = BadRequest;
