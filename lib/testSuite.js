'use strict';

(function(exports) {
  var utils = require('./utils.js');

  // string templates

  function message(text, level) {
    console.log(utils.indent(level) + text);
  };

  // test suite

  function TestSuite(desc) {
    this.desc = desc;
    this.before = [];
    this.units = [];
  };

  TestSuite.prototype.setup = function() {
    for (var index = 0; index < this.before.length; index++) {
      this.before[index]();
    };
  };

  TestSuite.prototype.run = function(level) {
    message(this.desc, level);
    for (var index = 0; index < this.units.length; index++) {
      this.setup();
      this.units[index].run(level + 1);
    };
  };

  TestSuite.prototype.copyBefore = function() {
    return this.before.slice();
  };

  TestSuite.prototype.addUnit = function(unit) {
    this.units.push(unit);
  };

  TestSuite.prototype.addBefore = function(before) {
    this.before.push(before);
  };

  exports.TestSuite = TestSuite;
})(this);
