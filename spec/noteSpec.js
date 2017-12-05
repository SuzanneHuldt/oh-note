  function testNoteHasTextContent() {
    var note = new Note('hello');
    if(note.text!=="hello") {
      throw new Error("Note text is not an empty string")
    }
    else {
      console.log("testNoteHasTextContent has passed")
    }
  };
  testNoteHasTextContent();
