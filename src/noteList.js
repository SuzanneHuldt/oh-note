'use strict'

function NoteList() {
  this._notes = [];
};

NoteList.prototype.save = function (note) {
  this._notes.push(note);
  return this._notes;
};
