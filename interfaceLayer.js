var notebook = new NoteList();

var noteTitle = document.querySelector('#new-note-title');
var noteContent = document.querySelector('#new-note-text');
var addButton = document.querySelector('#create-new-note');
var allNotes = document.querySelector('.all-notes');

addButton.addEventListener('click', function(event) {
  var div = document.createElement('div');
  var note = new Note(noteTitle.value, noteContent.value);
  notebook.save(note);
  noteContent.value = '';
  noteTitle.value = '';
  allNotes.appendChild(div);
  div.setAttribute('class', 'note');
  div.innerHTML = notebook._notes[notebook._notes.length - 1]._name + ' ' + notebook._notes[notebook._notes.length - 1].text;
  event.preventDefault();
});
