'use strict'

function Note(name, string) {
  this.text = string;
  this._name = name;
  this._date = new Date();
};

Note.prototype.updateText = function (newtext) {
  this.text = newtext;
  return this.text;
};

Note.prototype.name = function() {
  return this._name;
};

Note.prototype.date = function() {
  return this._date;
};


console.log(this._date);
