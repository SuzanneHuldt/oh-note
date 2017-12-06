'use strict'

function Note(name, string) {
  this.text = string;
  this._name = name;
  this._date = new Date();
  this._id = 0
};

Note.prototype.updateText = function (newtext) {
  this.text = newtext;
  // I'm not sure if we need all these return statements
  return this.text;
};

Note.prototype.name = function() {
  return this._name;
};

Note.prototype.date = function() {
  return this._date;
};

Note.prototype.id = function() {
  return this._id;
};
