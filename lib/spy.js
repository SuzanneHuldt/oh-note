'use strict';

(function(exports) {
  function Spy() {
    this._callCount = 0;
    this.and = this;
  };

  Spy.prototype.returnValue = function (value) {
    this._spyReturnValue = value;
    return this;
  };

  function spyOn(object, name) {
    var spy = new Spy();
    object[name] = function() {
      spy._callCount += 1;
      return spy._spyReturnValue;
    };
    return spy;
  };

  exports.spyOn = spyOn;
})(this);
