'use strict';

(function(exports){

  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.save = function (note) {
    this._notes.push(note);
    var idnum = this._notes.length
    note._id = idnum
    return this._notes;
  };

  NoteList.prototype.delete = function (noteid) {
    for (var i = this._notes.length - 1; i >= 0; --i){
      if (this._notes[i]._id == noteid){
        this._notes.splice(i,1);
      };
    };
  };

  NoteList.prototype.notes = function () {
    return this._notes; };

  exports.NoteList = NoteList;
})(this);
