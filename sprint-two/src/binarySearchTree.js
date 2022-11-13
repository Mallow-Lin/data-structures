class NodeBST {
  constructor (value) {
    this.value = value;
    this.left = null;//add children, if lower than value
    this.right = null;// add children, if highter than value
  }
}




class BinarySearchTree {
  constructor(value) {
    this.root = new NodeBST(value);
    this.count = 1;
  }


  insert(value) {
    this.count++;
    var newNode = new NodeBST(value);

    var insertNode = function(node) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right);
        }
      }
    };
    insertNode(this.root);
  }

  contains(value) {
    var currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  depthFirstLog(func) {

    var traverse = function (node) { //5
      func(node.value); // [5, 2]

      if (node.left) { //2
        traverse(node.left); //traverse(2)
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */

