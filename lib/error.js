/**
 * error.js
 * lib
 *
 * Created by samover on 04/06/2017.
 */

'use strict';

const Error = require('jsonapi-serializer').Error;

module.exports = class DefaultError extends Error {
    constructor(type, opts = {}) {
        super(type, opts);
    }
}
