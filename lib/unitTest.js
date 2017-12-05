(function(exports) {
  function UnitTest(desc, block, level = 0) {
    var indent = '\t'.repeat(level);
    try {
      block();
      console.log(indent + desc);
    }
    catch(error) {
      console.log(`${indent}FAILED: ${desc}`);
      console.log(`${indent}${error.message}`);
    };
  };

  exports.UnitTest = UnitTest;
})(this);
