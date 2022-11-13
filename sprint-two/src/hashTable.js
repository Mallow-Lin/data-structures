

var HashTable = function() {
  this.limit = 8;
  this.storage = LimitedArray(this.limit);
};
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this.limit); //0
  var tuple = [k, v];
  var bucket = this.storage.get(index);

  if (!bucket) {
    bucket = [tuple];
    this.storage.set(index, bucket);
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    } else {
      bucket.push(tuple);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit); //0
  var bucket = this.storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  var bucket = this.storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  // delete this.storage[index][k];
};



/*
 * Complexity: What is the time complexity of the above functions?
    insert - constant time
    retrieve - constant time
    remove - constant time
 */


