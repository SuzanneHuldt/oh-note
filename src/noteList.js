'use strict'

function NoteList() {
  this._notes = [];
};

//scooped some id stuff out of save to shorten the method -sh
NoteList.prototype.save = function (note){
  this._notes.push(note);
  this.assign_id(note);
}

NoteList.prototype.assign_id = function(note){
  var id = this._notes.length
  note._id = id;
}

NoteList.prototype.delete = function (noteid) {
  for (var i = this._notes.length - 1; i >= 0; --i){
    if (this._notes[i]._id == noteid){
      this._notes.splice(i,1);
    };
  };
};

NoteList.prototype.notes = function () {
  return this._notes; };
