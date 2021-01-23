'use strict';
const Edge = require('./edge');
// const Vertex = require('./vertex');
const Queue = require('../stacks-and-queues/queue');
const Stack = require('../stacks-and-queues/stack');
const Vertex = require('./vertex');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    // .set(key, value) puts a key value (aka node) in the Map
    // when you add a node/vertex for the first time, the value is an empty array because it will eventually  hold a list of all of the edges (which point to nodes) that it is connected to
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    //error checking: we Must have a starting and ending node
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Can\'t add a directed edge if start or end node does not exist in the map');
    }

    //get startVertex from the Map (all of the vertices)
    // push a new Edge that will connect startVertext to the end into the array along with the weight

    const adjacencies = this.adjacencyList.get(startVertex);
    const edge = new Edge(endVertex, weight);
    adjacencies.push(edge);
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('This vertex is not in the graph. Invalid vertex: ', vertex);
    }
    return this.adjacencyList.get(vertex);
  }

  //O(n^2)
  breadthFirstSearch(startNode) {
    const queue = new Queue();
    const visitedNodes = new Set();

    queue.enqueue(startNode);
    visitedNodes.add(startNode);

    while (queue.length) {
      //remove the first item in the queue
      const currentNode = queue.dequeue();

      //get all of the neighbors of the item we just dequeued
      const neighbors = this.getNeighbors(currentNode);

      //loop over all of the neighbors
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        //if the set has the node that i'm looking for, do nothing
        if (visitedNodes.has(neighborNode))
          continue;
        else {
          //otherwise i need to add it to the set
          visitedNodes.add(neighborNode);
          queue.enqueue(neighborNode);
        }
      }
    }

    //return the set so i have a list of nodes of where i've been
    return visitedNodes;
  }

  depthFirstSearch(startNode) {
    const visitedNodes = new Set();
    const _traverseNeighbors = (node) => {
      // add the node to the set
      visitedNodes.add(node);
      //get all the neighbors
      const neighbors = this.getNeighbors(node);

      //loop over those neighbors
      for (let edge of neighbors) {
        //if the set doesn't have the node, then i want to run this function again with all of that edge's vertex's neighbors!
        if (!visitedNodes.has(edge.vertex)) {
          _traverseNeighbors(edge.vertex);
        }
      }
    };
    _traverseNeighbors(startNode);
    return visitedNodes;
  }

  getNodes() {
    if (!this.adjacencyList.size) return null;
    return this.adjacencyList;
  }

  size() {
    if (!this.adjacencyList.size) return 0;
    return this.adjacencyList.size;
  }

  pathTo(startNode, endNode) {
    //very inefficient solution as it doesn't remove any items from the parent path, it just keeps going till it reaches the end node, so it can have loops and u-turns.. etc
    const stack = new Stack();
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while (stack.length) {
      //remove the top/last thing from the stack
      const currentNode = stack.pop();

      if (currentNode === endNode)
        return parentPath;

      //get all the neighbors
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        //find the vertex node
        const neighborNode = neighbor.vertex;

        //check if the Set contains that node
        if (visitedNodes.has(neighborNode)) {
          // stop looking at this node and move along
          continue;
        }
        else {
          //otherwise add the node to the Set
          visitedNodes.add(neighborNode);
        }

        //add it to the stack
        stack.push(neighborNode);
        //in the parentPath Map, set a path with this as the key and currentNode as the value
        parentPath.set(neighborNode, currentNode);
      }
    }
  }
}

module.exports = Graph;
