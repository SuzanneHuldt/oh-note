function Marie(isCool) {
  this.isCool = isCool;
};

Marie.prototype.says = function() {
  return 'MVP';
};

Marie.prototype.lower = function() {
  return this.says().toLowerCase();
};

describe('Marie object', function() {
  var marie;

  beforeEach(function() {
    marie = new Marie(false);
  });

  describe('has isCool property', function() {
    it('is false', function() {
      expect(marie.isCool).toBe(false);
    });
  });

  describe('#lower', function() {
    beforeEach(function() {
      spyOn(marie, 'says').and.returnValue('I DONT KNOW');
    });

    it('lowercases says', function() {
      expect(marie.lower()).toEqual('i dont know');
    });

    it('does not work as it should', function() {
      expect(marie.says()).toEqual('MVP');
    });
  });

  describe('#says', function() {
    it('can say MVP', function() {
      expect(marie.says()).toEqual('MVP');
    });
  });
});



