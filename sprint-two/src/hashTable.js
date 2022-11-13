

var HashTable = function() {
  this.limit = 8;
  this.storage = LimitedArray(this.limit);
};

HashTable.prototype.insert = function(k, v) { //k = val1 , value = val1 ;; key = val2, value = val2
  var index = getIndexBelowMaxForKey(k, this.limit); //0
  // var tuple = [k, v];

  // if (this.storage[index]) {
  //   this.storage[index].push(tuple);
  // } else {
  //   this.storage.set(index, tuple);
  // }
  // var bucket = this.storage.get(index); //

  // console.log('current storage', this.storage)

  // if (!bucket) {
  //   this.storage.set(index, tuple);
  //   console.log (this.storage)
  // }
  // bucket.push(tuple);

  if (this.storage[index] === undefined) {
    this.storage[index] = {};
  }

  this.storage[index][k] = v; //{0 : {val1: val1, val2: val2}}

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);

  return this.storage[index][k];

  // return this.storage[index].get(k);
  // var bucket = this.storage.get(index);
  // for (var i = 0; i < bucket.length; i++) {
  //   if (bucket[i][0] === k) {
  //     return bucket[i][1];
  //   }
  // }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);

  delete this.storage[index][k];
};



/*
 * Complexity: What is the time complexity of the above functions?
    insert - constant time
    retrieve - constant time
    remove - constant time
 */


