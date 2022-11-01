var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    // create the object numeric keys, starting from first, ending in last;
    first: 0,
    last: 0,
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  //add value to the top of stack object
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },
  //return and remove top value in the stack object
  dequeue: function() {
    if (this.first === this.last) {
      return undefined;
    }
    var value = this.storage[this.first];
    delete value;
    this.first++;
    return value;
  },
  //check size of stack
  size: function() {
    return this.last - this.first; //the last numeric key - shifted first numeric key
  }
};


