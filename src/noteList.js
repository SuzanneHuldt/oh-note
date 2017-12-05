'use strict'

function NoteList() {
  this._notes = [];
};

// var list;
// list = new NoteList();

NoteList.prototype.save = function (note) {
  this._notes.push(note);
  return this._notes;
};
