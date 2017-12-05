var notebook = new NoteList();

var addButton = document.querySelector('#create-new-note');
addButton.addEventListener('click', function(event) {
  
  note = new Note('Hello, world');
  console.log(note.text);
  event.preventDefault();
})
