function viewSingleNote(currentNoteID){
  darkenBackgroundBrightTitle();
  hideElementsExceptCurrentNote(currentNoteID);
}

function hashChangeEventListener(){
  window.addEventListener('hashchange', function() {
    var currentNoteID = getIDFromUrl();
    viewSingleNote(currentNoteID);
  });
}

function addNoteEventListener(allNotes) {
  allNotes.addEventListener('click', function(clickEvent) {
    document.location.href = `#${this.id}`, true;
  });
}

function getIDFromUrl() {
  return window.location.hash.split("#")[1];
};

function darkenBackgroundBrightTitle() {
  document.querySelector('#overlay').classList.remove('light-overlay');
  document.querySelector('#overlay').classList.add('dark-overlay');
  document.querySelector('#title').setAttribute('style','color: white;');
}

function hideElementsExceptCurrentNote(currentNoteID) {
  document.querySelector('#new-note-form').setAttribute('style','display: none;');
  var notes = findNoteContainer().children;
  for (var index = 0; index < notes.length; index++) {
    var child = notes[index];
    child.id != currentNoteID ? hideNote(child) : expandNote(child);
  };
}

function hideNote(childNote) {
  childNote.style.display = 'none';
}

function expandNote(childNote) {
  childNote.classList.remove('note');
  childNote.classList.add('full-screen-note');
  document.querySelector('.note-text').innerHTML = notebook.getNoteByID(childNote.id).text;
}
