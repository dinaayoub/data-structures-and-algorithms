'use strict';
const Graph = require('../graph');
const Edge = require('../edge');
const Vertex = require('../vertex');
const util = require('util');

describe('Graphs', () => {

  let graph = new Graph();
  let vertex1, vertex2, vertex5, vertex3, vertex4;
  it('Can successfully return null if the graph is empty', () => {
    expect(graph.getNodes()).toBe(null);
    expect(graph.size()).toBe(0);
  });

  it('Can successfully add a node to the graph', () => {
    vertex1 = graph.addVertex('potatoes');
    expect(graph.size()).toBe(1);
    expect(graph.adjacencyList.has(vertex1)).toBe(true);
  });

  it('Can successfully return a graph with only one node', () => {
    expect(graph.getNodes().get(vertex1)).toStrictEqual([]);
  });

  it('Can successfully add an edge to the graph', () => {
    vertex2 = graph.addVertex('tomatoes');
    graph.addDirectedEdge(
      vertex1,
      vertex2,
      4);
    expect(graph.adjacencyList.get(vertex1)[0].vertex.value).toBe('tomatoes');
    expect(graph.adjacencyList.get(vertex1)[0].weight).toBe(4);
  });

  it('Can successfully return a graph with only 1 edge (two nodes and an edge)', () => {
    expect(graph.size()).toBe(2);
  });

  it('Can successfully return a set of all the nodes in the graph', () => {
    vertex3 = graph.addVertex('apples');
    vertex4 = graph.addVertex('mangoes');
    vertex5 = graph.addVertex('bananas');
    expect(graph.size()).toBe(5);
    expect(graph.adjacencyList.get(vertex3)).not.toBeNull();
    expect(graph.adjacencyList.get(vertex4)).not.toBeNull();
    expect(graph.adjacencyList.get(vertex5)).not.toBeNull();
    // console.log(util.inspect(graph.getNodes(), { showHidden: false, depth: null }));

  });

  it('Can successfully return all the neighbors of a node in the graph', () => {
    graph.addDirectedEdge(vertex3, vertex4, 4);
    graph.addDirectedEdge(vertex4, vertex3, 5);
    graph.addDirectedEdge(vertex4, vertex5, 5);
    graph.addDirectedEdge(vertex5, vertex3, 3);
    graph.addDirectedEdge(vertex2, vertex4, 1);

    let neighbors = graph.getNeighbors(vertex4);
    expect(neighbors.length).toBe(2);
    expect(neighbors[0].vertex).toStrictEqual(vertex3);
    expect(neighbors[1].vertex).toStrictEqual(vertex5);
    console.log(neighbors);
  });

  it('Can successfully return all the weights of the edges of the neighbors of a node in the graph', () => {
    let neighbors = graph.getNeighbors(vertex4);
    expect(neighbors.length).toBe(2);
    expect(neighbors[0].weight).toStrictEqual(5);
    expect(neighbors[1].weight).toStrictEqual(5);

  });

  it('Can successfully return the size of the graph (the number of nodes)', () => {
    expect(graph.size()).toBe(5);
  });





});
