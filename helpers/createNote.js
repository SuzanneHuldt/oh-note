'use strict'; 

function preventEmpty(element, _default) {
  if (element.value == false) {
    element.value = _default;
  };
};

function preventEmptyNote() {
  preventEmpty(findNoteTitle(), 'try a title?');
  preventEmpty(findNoteText(), 'write something?');
};

function clear(element) {
  element.value = '';
};

function clearNoteFields() {
  clear(findNoteTitle());
  clear(findNoteText());
};

function createNoteAndResetForm(note) {
  notebook.save(note);
  clearNoteFields();
}

function createNoteOnPage(div,title,text) {
  allNotes.insertBefore(div, allNotes.childNodes[0]);
  div.setAttribute('class', 'note');
  div.setAttribute('id', notebook._notes[notebook._notes.length-1]._id);
  div.appendChild(title);
  title.setAttribute('class', 'note-title');
  div.appendChild(text);
  text.setAttribute('class', 'note-text');
}

function addTextToNote(title,content) {
  title.innerHTML = notebook._notes[notebook._notes.length - 1]._name;
  if (notebook._notes[notebook._notes.length - 1].text.length > 50) {
    content.innerHTML = notebook._notes[notebook._notes.length - 1].text.slice(0, 50) + '...';
  } else {
    content.innerHTML = notebook._notes[notebook._notes.length - 1].text;
  };
}
