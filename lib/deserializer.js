/**
 * deserializer.js
 * lib
 *
 * Created by samover on 04/06/2017.
 */

'use strict';

const Deserializer = require('jsonapi-serializer').Deserializer;

module.exports = class DefaultDeserializer extends Deserializer {
    constructor(opts = {}) {
        // TODO: add specific deserialization options for e.g. Date objects
        opts.keyForAttributes = opts.keyForAttribute || 'camelCase';
        super(type, opts);
    }
}
