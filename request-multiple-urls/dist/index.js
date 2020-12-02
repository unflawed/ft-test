"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMultipleUrls = void 0;
/**
 * [Keeping as an example, this can be deleted]
 * Using local dir as "mock" NPM package where this would be published
 * using npm publish with correct .npmrc config
 */
var index_1 = require("./src/utils/index");
Object.defineProperty(exports, "requestMultipleUrls", { enumerable: true, get: function () { return index_1.requestMultipleUrls; } });
var urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
];
/**
 * [Keeping as an example, this can also be deleted]
 * Returns an array of GET request promises for an array of URLs of type String
 * @param {String[]} urls
 */
index_1.requestMultipleUrls(urls)
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.error(error); });
//# sourceMappingURL=index.js.map