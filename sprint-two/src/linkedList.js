
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode1 = new Node(value);
    if (!list.head) {
      list.head = newNode1;
      list.tail = list.head;
    }

    list.tail.next = newNode1;
    list.tail = list.tail.next;
  };


  list.removeHead = function() {

    var headValue = list.head;

    delete list.head;
    list.head = headValue.next;

    return headValue.value;
  };


  list.contains = function(target) {

    var result = false;

    var hasTarget = function(obj) {

      if (obj.value === target) {
        result = true;
      }

      if (obj.next !== null) {
        hasTarget(obj.next);
      }
    };
    hasTarget(list.head);
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;

};

/*
 * Complexity: What is the time complexity of the above functions?

  addToTail - constant time
  removeHead - linear time
  contains - linear time
 */
