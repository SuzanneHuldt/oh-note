(function(exports) {
  function AssertionError(message) {
    this.name = 'AssertionError';
    this.message = message || '';
  };

  exports.AssertionError = AssertionError;
})(this);
