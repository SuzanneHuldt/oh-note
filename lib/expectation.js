"use strict";

var errors = require('./assertionError.js');
var AssertionError = errors.AssertionError;

function Expectation(statement) {
  this.statement = statement;
};

Expectation.prototype.toBe = function(comparator) {
  if (this.statement !== comparator) {
    throw new AssertionError(`Those two things ain\'t the same, fool. What made you think that ${this.statement} is the same as ${comparator}?!`)
  }
};
