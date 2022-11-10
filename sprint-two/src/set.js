var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //if item already exists in set storage don't do anything, don't push
  console.log(this.storage);
  if (!this.storage.includes(item)) {
    this.storage.push(item);
  }

  //else push item to set storage
};

setPrototype.contains = function(item) {
  if (this.storage.includes(item)) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  var index = this.storage.indexOf(item);
  this.storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
