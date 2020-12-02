"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHTTPStatus = void 0;
/**
 * Check the HTTP response is valid
 * @param {Object} response
 */
function checkHTTPStatus(response) {
    console.log("response");
    if (response.ok) {
        return response;
    }
    var error = new Error(response.statusText);
    return Promise.reject(error);
}
exports.checkHTTPStatus = checkHTTPStatus;
//# sourceMappingURL=_httpUtil.js.map