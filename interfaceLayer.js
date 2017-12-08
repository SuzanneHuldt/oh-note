var notebook = new NoteList();

function createNote() {
  findAddButton().addEventListener('click', function(event) {
    preventEmptyNote();
    createNoteAndResetForm();
    createNoteElement(findNoteContainer());
    addNoteEventListener(findMostRecentNote());
    event.preventDefault();
  });
}

hashChangeEventListener();
createNote();
