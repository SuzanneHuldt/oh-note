'use strict'

function Note() {
  this.text = "";

};

Note.prototype.updateText = function (newtext) {
  this.text = newtext;
  return this.text;
};
