(function(exports) {
  function TestSuite(desc, block) {
    this.count = 0
    var indent = '\t'.repeat(this.count);
    console.log(indent + desc)
    this.count += 1;
    block();
  };

  exports.TestSuite = TestSuite;
})(this);
