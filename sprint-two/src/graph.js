
var GraphNode = function(value) {
  this.value = value;
  this.edgesList = [];
};

// Instantiate a new graph
var Graph = function() { //value = 1

  this.nodes = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this.nodes[node] = new GraphNode(node);
};

Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }
  return false;
};



// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var key in this.nodes) {
    if (this.hasEdge(key, node)) {
      this.removeEdge(key, node);
    }
  }
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edgesList.includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edgesList.push(toNode);
  this.nodes[toNode].edgesList.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (this.hasEdge(fromNode, toNode)) {
    var indexOfFrom = this.nodes[fromNode].edgesList.indexOf(toNode);

    var indexOfTo = this.nodes[toNode].edgesList.indexOf(fromNode);

    this.nodes[fromNode].edgesList.splice(indexOfFrom, 1);
    this.nodes[toNode].edgesList.splice(indexOfTo, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


