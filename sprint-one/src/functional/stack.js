var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create the object numeric keys
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value; //store the value with the latest key
    key++; //latest key += 1
  };

  someInstance.pop = function() {
    if (key > 0) { //if the storage {} is !undefined
      key--; //latest key -=1
      var value = storage[key];
      delete value; //delete the last property from the storage{}
      return value; //return the popped value;
    }
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};

//testing
