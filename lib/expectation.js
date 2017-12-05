"use strict";

var errors = require('./assertionError.js');
var AssertionError = errors.AssertionError;

function Expectation(statement) {
  this.statement = statement;
};

Expectation.prototype.toBe = function(comparator) {
};
