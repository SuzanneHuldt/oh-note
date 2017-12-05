var expectation = require('./expectation.js');
var unitTest = require('./unitTest.js');
var testSuite = require('./testSuite.js');

function expect(statement) {
  return new expectation.Expectation(statement);
};

function it(description, block) {
  return new unitTest.UnitTest(description, block);
};

function describe(description, block) {
  return new testSuite.TestSuite(description, block);
};

describe('nested', function() {
  describe('things that do stuff', function() {
    it('does stuff', function() {
      expect(4 + 5).toEqual(9);
    });

    it('does other stuff', function() {
      expect(4 + 6).toEqual(9);
    });
  });

  describe('things that do stuff', function() {
    it('does stuff', function() {
      expect(4 + 5).toEqual(9);
    });

    it('does other stuff', function() {
      expect(4 + 6).toEqual(9);
    });
  });
});
