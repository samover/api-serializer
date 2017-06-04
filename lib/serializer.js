/**
 * serializer.js
 * lib
 *
 * Created by samover on 04/06/2017.
 */

'use strict';

const Serializer = require('jsonapi-serializer').Serializer;

module.exports = class DefaultSerializer extends Serializer {
    constructor(type, opts = {}) {
        opts.keyForAttribute = opts.keyForAttribute || 'camelCase';
        opts.pluralizeType = opts.pluralizeType || true;
        opts.nullIfMissing = opts.nullIfMissing || true; // better for IOS parsing
        super(type, opts);
    }
}
