var notebook = new NoteList();

var noteTitle = document.querySelector('#new-note-title');
var noteContent = document.querySelector('#new-note-text');
var addButton = document.querySelector('#create-new-note');

addButton.addEventListener('click', function(event) {
  note = new Note(noteTitle.value, noteContent.value);
  notebook.save(note);
  noteContent.value = '';
  noteTitle.value = '';
  event.preventDefault();
});
