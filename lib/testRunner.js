'use strict';

(function(exports) {
  var testSuite = require('./testSuite.js');

  var headline = 'OhNotifier Test Runner v0.1';

  function TestRunner() {
    var suite = new testSuite.TestSuite(headline);
    this.blocks = [suite];
  };

  TestRunner.prototype.addContext = function(suite) {
    suite.before = this.current().copyBefore();
    this.addUnit(suite);
    this.blocks.push(suite);
  };

  TestRunner.prototype.before = function() {
    return this.current().before;
  };

  TestRunner.prototype.addUnit = function(unit) {
    this.current().addUnit(unit);
  }

  TestRunner.prototype.addBefore = function(before) {
    this.current().addBefore(before);
  };

  TestRunner.prototype.popContext = function(suite) {
    this.blocks.pop(suite);
  };

  TestRunner.prototype.current = function() {
    return this.blocks.slice(-1)[0];
  };

  TestRunner.prototype.run = function() {
    this.blocks[0].run(0);
  };

  exports.TestRunner = TestRunner;
})(this);
