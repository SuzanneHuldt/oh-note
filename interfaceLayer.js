var notebook = new NoteList();

var noteTitle = document.querySelector('#new-note-title');
var noteText = document.querySelector('#new-note-text');
var addButton = document.querySelector('#create-new-note');
var allNotes = document.querySelector('.all-notes');

addButton.addEventListener('click', function(event) {
  var newNote = document.createElement('div');
  var newNoteTitle = document.createElement('h1');
  var newNoteText = document.createElement('p');
  if (noteTitle.value == false) {
    noteTitle.value = 'try a title?'
  }
  if (noteText.value == false) {
    noteText.value = 'write something?'
  }
  var note = new Note(noteTitle.value, noteText.value);
  notebook.save(note);
  noteText.value = '';
  noteTitle.value = '';
  allNotes.appendChild(newNote);
  newNote.setAttribute('class', 'note');
  newNote.appendChild(newNoteTitle);
  newNoteTitle.setAttribute('class', 'note-title');
  newNote.appendChild(newNoteText);
  newNoteText.setAttribute('class', 'note-text');
  newNoteTitle.innerHTML = notebook._notes[notebook._notes.length - 1]._name;
  newNoteText.innerHTML = notebook._notes[notebook._notes.length - 1].text.slice(0, 20);
  event.preventDefault();
});
