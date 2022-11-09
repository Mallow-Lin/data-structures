
var GraphNode = function(value) {
  this.value = value;
  this.edgesList = [];
};

// Instantiate a new graph
var Graph = function() { //value = 1
  // this.storage = {};
  // this.index = 0;
  // this.size = 0;
  // this.value = value;
  this.nodes = {};
  // this.index = 0;
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { //node = 1; node = 2; node = 3
  // this.nodes['value'] = node;

  this.nodes[node] = new GraphNode(node);

  // this.index++;
  // console.log(this.nodes);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }
  return false;
};



// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //node = 2;
  // for (var i = 0; this.nodes.length; i++) {
  delete this.nodes[node];
  //  console.log('index', index);
};
// this.nodes = [{value: 1, Edges: []}, 2, 3]
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edgesList) {

  }

  //for loop through array?
};

/*
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);

    new Graph = {
      nodes : {
        1: {value: 1, edges: []}
        2: {value: 2, edges: []}
        3: {value: 3, edges: []}
      }
    }
    index = {value: 3, edges: []};
 */



// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {//{value: 5, edges: [6,]}, {value: 6, edges: [5,]}
  this.nodes[fromNode].edgesList.push(toNode);
  this.nodes[toNode].edgesList.push(fromNode);
  // var index = this.nodes.indexOf(fromNode);
  // console.log('indexOfFrom', index);

  // this.nodes[index].edgesList.push(toNode);
  console.log('newThis', this.nodes);
  // var node = this.nodes[index];

  // [{value: 5, edges: [6,]}, {value: 6, edges: [5,]}];


  // this.nodes[index].edges = toNode;
  // node.edges = toNode;
  // console.log('from', fromNode);
  // console.log('to', toNode);


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


