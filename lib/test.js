describe('overall block', function() {
  var x;

  beforeEach(function() {
    x = 4;
  });

  describe('nested 1', function() {
    beforeEach(function() {
      x = 3;
    });

    it('returns 3', function() {
      expect(x).toEqual(3);
    });
  });

  describe('nested 2', function() {
    it('returns 3', function() {
      expect(x).toEqual(5);
    });
  });
});

