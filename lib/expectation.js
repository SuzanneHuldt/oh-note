'use strict';

(function(exports) {
  function Expectation(statement) {
    this.statement = statement;
  };

  Expectation.prototype.toBe = function(x) {
    if (this.statement !== x) {
      throw new Error(`expected ${this.statement} to be ${x}`);
    };
  };

  Expectation.prototype.toEqual = function(x) {
    if (this.statement != x) {
      throw new Error(`expected ${this.statement} to equal ${x}`);
    };
  };

  exports.Expectation = Expectation;
})(this);
