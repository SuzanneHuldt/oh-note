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

function createNoteAndResetForm() {
  notebook.save(findNoteTitle().value, findNoteText().value);
  clearNoteFields();
}

function addNoteTitle(div) {
  var title = document.createElement('h1');
  title.setAttribute('class', 'note-title');
  title.innerHTML = notebook.last().name();
  div.appendChild(title);
};

function addNoteText(div) {
  var text = document.createElement('p');
  text.setAttribute('class', 'note-text');
  text.innerHTML = notebook.last().preview();
  div.appendChild(text);
};

function createNoteElement(container) {
  var div = document.createElement('div');
  div.setAttribute('class', 'note');
  div.setAttribute('id', notebook.last().id());
  addNoteTitle(div);
  addNoteText(div);
  container.insertBefore(div, container.firstChild);
};
