var notebook = new NoteList();

var addButton = document.querySelector('#create-new-note');
var noteContent = document.querySelector('#new-note-text');

addButton.addEventListener('click', function(event) {
  note = new Note(noteContent.value);
  notebook.save(note);
  noteContent.value = '';
  event.preventDefault();
});
