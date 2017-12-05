#!/usr/bin/env node
'use strict';

var testSuite = require('./testSuite.js')
var unitTest = require('./unitTest.js')
var expectation = require('./expectation.js')

var suite = new testSuite.TestSuite('Oh-Note Test Runner v0.0');

function describe(desc, block) {
  var previous = suite;
  suite = new testSuite.TestSuite(desc, block, previous.before.slice());
  suite.setup();
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

// the tests

describe('overall block', function() {
  var x;

  beforeEach(function() {
    x = 4;
  });

  describe('nested 1', function() {
    beforeEach(function() {
      x = 3;
    });

    it('returns 3', function() {
      expect(x).toEqual(4);
    });
  });

  describe('nested 2', function() {
    it('returns 3', function() {
      expect(x).toEqual(5);
    });
  });
});

suite.run(0);
