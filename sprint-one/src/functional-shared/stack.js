var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    key: 0
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  //add value to the top of stack object
  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },
  //return and remove top value in the stack object
  pop: function() {
    if (this.key > 0) {
      this.key--;
      var value = this.storage[this.key];
      delete this.storage[this.key];
      return value;
    }
  },
  // check size of stack
  size: function() {
    return this.key; //the latest numeric key will be the size of stack
  }
};


