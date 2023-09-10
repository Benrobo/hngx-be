const SendResponse = require("../helper/sendResponse");
const crypto = require('crypto');


class BaseController extends SendResponse {
  constructor() {
    super();
  }

  uuid(length) {
    const bytes = (length ?? 4) / 2; // Since each byte is represented by 2 hexadecimal characters
    const randomBytes = crypto.randomBytes(bytes);
    const randomId = randomBytes.toString('hex');

    return randomId;
  }
}

module.exports = BaseController;
