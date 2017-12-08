function viewSingleNote(currentNoteID){
  darkenBackgroundBrightTitle();
  hideElementsExceptCurrentNote(currentNoteID);
  addExitButton();
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
  document.getElementById(childNote.id).childNodes[1].innerHTML = notebook.getNoteByID(childNote.id).text;
}

function addExitButton() {
  var exitButton = document.createElement('div');
  var exitIcon = document.createElement('i');
  exitButton.setAttribute('class', 'button-wrapper');
  findNoteContainer().insertBefore(exitButton, findNoteContainer().firstChild);
  exitIcon.setAttribute('class', 'material-icons');
  exitIcon.innerHTML = 'close';
  exitIcon.setAttribute('id', 'exit-icon');
  exitButton.appendChild(exitIcon);
}
