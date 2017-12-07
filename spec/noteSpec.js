  var notemodule = require('../src/note.js')

  describe('Note', function(){
    var note;
    var date

    beforeEach(function(){
      note = new notemodule.Note('Greeting', 'Hello Theo')
    });

    beforeEach(function(){
      date = new Date();
    });



    describe('#text', function(){
      it('has text', function(){
        expect(note.text).toEqual('Hello Theo')
      });
    });

    describe('#name', function(){
      it('has a name', function(){
        expect(note.name()).toEqual('Greeting');
      });
    });


    describe('#date', function(){
      it('has a date', function(){
        expect(note.date()).toEqual(date.toDateString());
      });
    });
  });
