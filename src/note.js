'use strict'

function Note(string) {
  this.text = string;

};

Note.prototype.updateText = function (newtext) {
  this.text = newtext;
  return this.text;
};
