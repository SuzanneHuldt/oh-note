#!/usr/bin/env node
'use strict';

// built-in modules
var fs = require('fs');

// package modules
var testSuite = require('./testSuite.js')
var unitTest = require('./unitTest.js')
var expectation = require('./expectation.js')

// global suite object
var suite = new testSuite.TestSuite('Oh-Note Test Runner v0.0');

function compile(desc, block) {
  var before = previous.before.slice();
  suite = new testSuite.TestSuite(desc, before);
  block();
};

function describe(desc, block) {
  var previous = suite;
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

fs.readFile('./test.js', function(err, data) {
  eval(data.toString());
  suite.run(0);
});

