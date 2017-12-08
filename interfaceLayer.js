var notebook = new NoteList();

var noteTitle = document.querySelector('#new-note-title');
var noteText = document.querySelector('#new-note-text');
var addButton = document.querySelector('#create-new-note');
var allNotes = document.querySelector('.all-notes');

function changeNotes(addr){
  document.querySelector('#overlay').classList.remove('light-overlay');
  document.querySelector('#overlay').classList.add('dark-overlay');
  document.querySelector('#title').setAttribute('style','color: white;');
  document.querySelector('#new-note-form').setAttribute('style','display: none;');

  var noteNow = addr;
  var notes = document.querySelector('.all-notes').children;
  for (var index = 0; index < notes.length; index++) {
    var childNote = notes[index];
    if (childNote.id !== noteNow) {
      childNote.style.display = 'none';
    };
  };
}

function hashChangeEventListener(){
  window.addEventListener("hashchange", function() {
    var addr = getNrFromUrl();
    changeNotes(addr);
  });
}
function addNoteEventListener(allNotes) {
  allNotes.addEventListener('click', function() {
    console.log(this.id);
    document.location.href = `#${this.id}`,true;
  });
}

function getNrFromUrl() {
  return window.location.hash.split("#"[1]);
};

function createNote() {
  addButton.addEventListener('click', function(event) {
    preventEmptyNote();
    createNoteAndResetForm();
    createNoteElement(findNoteContainer());
    addNoteEventListener(findMostRecentNote());
    event.preventDefault();
  });
}

createNote();
