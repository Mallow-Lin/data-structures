var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create the object numeric keys, starting from first, ending in last;
  var first = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value; //store the value with the latest key
    last++; //latest key +=1
  };

  someInstance.dequeue = function() {
    if (first === last) { //if the storage {} is empty
      return undefined;
    }
    var value = storage[first];
    delete storage.first; //delete the first property from the storage{}
    first++; //the first key will shift with += 1
    return value; // return the shifted value
  };

  someInstance.size = function() {
    return last - first;
  };
  return someInstance;
};
