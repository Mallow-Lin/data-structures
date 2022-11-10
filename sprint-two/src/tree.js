var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;


  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = new Tree(value);
  this.children.push(newChild);
};


treeMethods.contains = function(target) {
  var result = false;
  var hasTarget = function(obj) {
    if (obj.value === target) {
      result = true;
    }
    if (obj.children) {
      for (var i = 0; i < obj.children.length; i++) {
        hasTarget(obj.children[i]);
      }
    }
  };
  hasTarget(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
