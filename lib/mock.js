'use strict';

var spy = require('./spy.js');

function Mock(name, methods) {
  this.name = name;
  this.spies = {}
  if (methods.constructor === Array) {
    this.fromArray(methods);
  }
  else {
    this.fromHash(methods);
  };
};

Mock.prototype.createSpy = function(name, returnValue) {
  var spyObject = spy.spyOn(this, name).returnValue(returnValue);
  this.spies[name] = spyObject;
};

Mock.prototype.fromArray = function(array) {
  for (var index = 0; index < array.length; index++) {
    this.createSpy(array[index]);
  };
};

Mock.prototype.fromHash = function(hash) {
  var keys = Object.keys(hash);
  for (var index = 0; index < keys.length; index++) {
    var method = keys[index];
    this.createSpy(method, hash[method]);
  };
};

Mock.prototype.isCalledWith = function(name) {
  return this.spies[name]._callCount > 0;
};

Mock.prototype.returnValue = function(method, value) {
  this.spies[method].returnValue(value);
};

var m = new Mock('gaby', { eyes: 2, fall: 3 });
console.log(m.eyes());
