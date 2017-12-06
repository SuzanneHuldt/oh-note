function noteListHasEmptyArray() {
  var notelist = new NoteList();
  if(!Array.isArray(notelist._notes)) {
    throw new Error("NoteList should contain an empty array")
  }
  else {
    console.log("Has empty array,great!")
  }
};
noteListHasEmptyArray();

function saveList() {
  var noteList = new NoteList();
  var note = new Note("Marie","is amazing everyday of her life");
  noteList.save(note);
  if(noteList._notes.length !== 1) {
    throw new Error("Notelist did not save the note")
  }
  else {
    console.log("All good the note was saved")
  }
};

saveList();

function deleteItemFromList() {
  var noteList = new NoteList();
  var note = new Note("Gabby","is amazing everyday of her life");
  noteList.save(note);
  noteList.delete(1);
  if(noteList._notes.length !== 0) {
    throw new Error("Notelist did not delete the note")
  }
  else {
    console.log("All good the note was deleted")
  }
};

deleteItemFromList()
