#!/usr/bin/env node
'use strict';

// built-in modules
var fs = require('fs');

// package modules
var testRunner = require('./testRunner.js');
var testSuite = require('./testSuite.js');
var unitTest = require('./unitTest.js');
var expectation = require('./expectation.js');

// global suite
var runner = new testRunner.TestRunner();

function describe(desc, block) {
  runner.addContext(new testSuite.TestSuite(desc));
  block();
  runner.popContext();
};

function it(desc, block) {
  var test = new unitTest.UnitTest(desc, block);
  runner.addUnit(test);
};

function expect(statement) {
  return new expectation.Expectation(statement);
};

function beforeEach(block) {
  runner.addBefore(block);
};

// main script

var source = '';

for (var counter = 2; counter < process.argv.length; counter++) {
  source += fs.readFileSync(process.argv[counter]);
};

eval(source);
runner.run();
