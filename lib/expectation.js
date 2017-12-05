'use strict';

(function(exports) {
  function Expectation(statement) {
    this.statement = statement;
  };

  Expectation.prototype.toBe = function(comparator) {
    if (this.statement !== comparator) {
      throw new Error(`expected ${this.statement} to be ${comparator}`);
    };
  };

  Expectation.prototype.toEqual = function(comparator) {
    if (this.statement != comparator) {
      throw new Error(`expected ${this.statement} to equal ${comparator}`);
    };
  };

  exports.Expectation = Expectation;
})(this);
