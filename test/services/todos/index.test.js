'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('todos service', () => {
  it('registered the todos service', () => {
    assert.ok(app.service('todos'));
  });
});
