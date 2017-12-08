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

    it('has been called', function() {
      marie.says(5, 6);
      expect(marie.says).toHaveBeenCalledWith(5, 6);
    });
  });

  describe('#says', function() {
    it('can say MVP', function() {
      expect(marie.says()).toEqual('MVP');
    });
  });
});



