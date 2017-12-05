'use strict';

function TestSuite(desc, block, before = []) {
  this.desc = desc;
  this.block = block;
  this.before = before;
  this.units = [];
}

TestSuite.prototype.setup = function() {
  this.block();
};

TestSuite.prototype.run = function(level) {
  var indent = '\t'.repeat(level);
  console.log(indent + this.desc);
  for (var u = 0; u < this.units.length; u++) {
    for (var b = 0; b < this.before.length; b++) {
      this.before[b]();
    };
    this.units[u].run(level + 1);
  };
};

module.exports = {
  TestSuite: TestSuite,
};
