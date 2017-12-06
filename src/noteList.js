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

// shortened the iterator
NoteList.prototype.deleteFromSaved = function (noteid) {
  for (var i = 0; i<this._notes.length; i++)
  { if (this._notes[i]._id == noteid){
      this._notes.splice(i,1);
    };
  };
};

// not sure how useful this was just returning the array so now it iterates to return notes
// at the moment it console logs them but this can ofc be changed to return for hooking
// up with the interface
NoteList.prototype.notes = function () {
  for (var i = 0; i<this._notes.length; i++)
  {console.log(this._notes[i])}
};
