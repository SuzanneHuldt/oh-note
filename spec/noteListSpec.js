var notelistmodule = require('../src/noteList.js')

  describe('Notelist', function(){
    var notelist

    beforeEach(function(){
      notelist = new notelistmodule.NoteList();
    })

    describe('#_notes', function(){
      it('has an empty array', function(){
        expect(notelist._notes).toBeEmpty();
      })
    })

    describe('#save', function(){
      var note;

      beforeEach(function(){
        note = createSpyObj('note')
        notelist.save(note)
      });

      it('can save notes', function(){
        expect(notelist._notes).toContain(note)
      })

      it('gives notes an id', function(){
        expect(note._id).toEqual(1)
      })
    })

    describe('#delete', function(){
      var note;

      beforeEach(function(){
        note = createSpyObj('note')
        notelist.save(note)
        notelist.delete(1)
      });

      it('should delete item from list based on id', function(){
        expect(notelist._notes).toBeEmpty();
      })
    })
  })
