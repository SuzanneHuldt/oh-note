'use strict';

(function(exports) {
  var utils = require('./utils.js');

  // string templates
  
  function success(text, level) {
    utils.asColour(`${utils.indent(level)}${text}`, 'green');
  };

  function failure(text, fail, level) {
    utils.asColour(`${utils.indent(level)}${text} (${fail})`, 'red');
  };

  // unit test

  function UnitTest(desc, block) {
    this.desc = desc;
    this.block = block;
  };

  UnitTest.prototype.run = function(level) {
    try {
      this.block();
      success(this.desc, level);
    } 
    catch(error) {
      failure(this.desc, error.message, level);
    };
  };

  exports.UnitTest = UnitTest;
})(this);
