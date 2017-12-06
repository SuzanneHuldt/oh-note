#!/usr/bin/env node
'use strict';

// built-in modules
var fs = require('fs');

// package modules
var testSuite = require('./testSuite.js')
var unitTest = require('./unitTest.js')
var expectation = require('./expectation.js')


function describe(desc, block) {
  var previous = suite;
  suite = new testSuite.TestSuite(desc, previous.before.slice());
  block();
  previous.units.push(suite);
  suite = previous;
};

function it(desc, block) {
  var test = new unitTest.UnitTest(desc, block);
  suite.units.push(test);
};

function expect(statement) {
  return new expectation.Expectation(statement);
};

function beforeEach(block) {
  suite.before.push(block);
};

// main script

var suite = new testSuite.TestSuite('Oh-Note Test Runner v0.0');
var source = '';

for (var counter = 2; counter < process.argv.length; counter++) {
  source += fs.readFileSync(process.argv[counter]);
};

eval(source);
suite.run(0);
