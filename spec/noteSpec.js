  function testNoteHasTextContent() {
    var note = new Note();
    if(note.text!=="") {
      throw new Error("Note text is not an empty string")
    }
    else {
      console.log("testNoteHasTextContent has passed")
    }
  };
  testNoteHasTextContent();
