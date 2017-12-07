var notebook = new NoteList();

var noteTitle = document.querySelector('#new-note-title');
var noteText = document.querySelector('#new-note-text');
var addButton = document.querySelector('#create-new-note');
var allNotes = document.querySelector('.all-notes');
var singleNote = document.querySelector('.note');

function preventEmptyNote(){
  if (noteTitle.value == false) {
    noteTitle.value = 'try a title?'

  }
  if (noteText.value == false) {
    noteText.value = 'write something?'
  }
}

function createNoteOnPage(div,title,text) {
  allNotes.insertBefore(div, allNotes.childNodes[0]);
  div.setAttribute('class', 'note');
  div.appendChild(title);
  title.setAttribute('class', 'note-title');
  div.appendChild(text);
  text.setAttribute('class', 'note-text');
}

function createNoteAndResetForm(note) {
  notebook.save(note);
  noteText.value = '';
  noteTitle.value = '';
}

function addTextToNote(title,content) {
  title.innerHTML = notebook._notes[notebook._notes.length - 1]._name;
  if (notebook._notes[notebook._notes.length - 1].text.length > 50) {
    content.innerHTML = notebook._notes[notebook._notes.length - 1].text.slice(0, 50) + '...';
  } else {
    content.innerHTML = notebook._notes[notebook._notes.length - 1].text.slice(0, 50);
  };
}

function createNote() {
  addButton.addEventListener('click', function(event) {
    var newNote = document.createElement('div');
    var newNoteTitle = document.createElement('h1');
    var newNoteText = document.createElement('p');

    preventEmptyNote();
    createNoteAndResetForm(new Note(noteTitle.value, noteText.value));
    createNoteOnPage(newNote,newNoteTitle,newNoteText);
    addTextToNote(newNoteTitle,newNoteText);
    event.preventDefault();
  });
}

createNote();

// singleNote.addEventListener('click', function() {
//   console.log("what");
// });
