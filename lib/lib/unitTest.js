'use strict';

function UnitTest(desc, unit) {
  this.desc = desc;
  this.unit = unit;
};

UnitTest.prototype.run = function(level) {
  var indent = '\t'.repeat(level);
  try {
    this.unit();
    console.log(indent + this.desc);
  } 
  catch(error) {
    console.log(`${indent}FAILS: ${this.desc}\n${indent}${error.message}`);
  }
}

module.exports = {
  UnitTest: UnitTest,
};
