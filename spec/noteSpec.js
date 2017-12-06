  function testNoteHasTextContent() {
    var note = new Note('Greeting', 'hello');
    if(note.text!=="hello") {
      throw new Error("Note text is not a string")
    }
    else {
      console.log("testNoteHasTextContent has passed")
    }
  };
  testNoteHasTextContent();

  function testNoteHasName() {
    var newnote = new Note('Fred', 'Ben&Jerry');
    if(newnote.name() !== "Fred") {
      throw new Error ("Note text doesn't have a name or text")
    }
    else {
      console.log("testNoteHasName has passed")
    }
  }
  testNoteHasName();

  function testNoteHasDate() {
    var note1 = new Note('Fred', 'Ben&Jerry');
    if(note1.date() == '') {
      throw new Error ("Note text doesn't have a name or text")
    }
    else {
      console.log("testNoteHasDate has passed")
    }
  }

testNoteHasDate();
