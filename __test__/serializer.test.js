/**
 * serializer.test.js
 * test
 *
 * Created by samover on 04/06/2017.
 */

'use strict';

const Serializer = require('../lib/serializer');

const data = [
    { id: 1, first_name: 'Sandro', last_name: 'Munda' },
    { id: 2, first_name: 'John', last_name: 'Doe' }
];

test('serializes to camelcase and pluralizes type by default ', () => {
    const UserSerializer = new Serializer('user', {
        attributes: ['first_name', 'last_name'],
    });

    UserSerializer.serialize(data).data.map(item => {
        expect(item.type).toBe('users');
        expect(item).toHaveProperty('id');
        expect(item.attributes).toHaveProperty('firstName');
        expect(item.attributes).toHaveProperty('lastName');
    })
});

test('overrides default camelCase', () => {
    const UserSerializer = new Serializer('user', {
        keyForAttribute: 'kebab-case',
        attributes: ['first_name', 'last_name'],
    });

    UserSerializer.serialize(data).data.map(item => {
        expect(item.type).toBe('users');
        expect(item).toHaveProperty('id');
        expect(item.attributes).toHaveProperty('first-name');
        expect(item.attributes).toHaveProperty('last-name');
    })
});
