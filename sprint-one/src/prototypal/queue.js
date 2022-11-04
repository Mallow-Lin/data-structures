var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },
  dequeue: function() {
    if (this.first < this.last) {
      var value = this.storage[this.first];
      delete value;
      this.first++;
      return value;
    }
  },
  size: function() {
    return this.last - this.first;
  }
};


