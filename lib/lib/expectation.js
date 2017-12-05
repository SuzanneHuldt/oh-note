'use strict';

function Expectation(statement) {
  this.statement = statement;
};

Expectation.prototype = {
  toBe: function(x) {
    if (this.statement !== x) {
      throw new Error(`Expected ${this.statement} to be ${x}`);
    };
  },

  toEqual: function(x) {
    if (this.statement != x) {
      throw new Error(`Expected ${this.statement} to equal ${x}`);
    };
  },
};

module.exports = {
  Expectation: Expectation,
};
