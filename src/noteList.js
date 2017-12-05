'use strict'

function NoteList() {
  this._notes = [];
};

NoteList.prototype.save = function (note) {
  this._notes.push(note);
  return this._notes;
};

NoteList.prototype.delete = function (notename) {
  for (var i = this._notes.length - 1; i >= 0; --i){
    if (this._notes[i]._name == notename){
      this._notes.splice(i,1);
    };
  };
};
