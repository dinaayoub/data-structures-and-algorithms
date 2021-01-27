'use strict';
const Graph = require('../graph');
const getEdges = require('../get-edges/getEdges');

describe('Graphs', () => {

  const graph = new Graph();
  const exampleGraph = new Graph();
  const metroville = exampleGraph.addVertex('Metroville');
  const arendelle = exampleGraph.addVertex('Arendelle');
  const monstropolis = exampleGraph.addVertex('Monstropolis');
  const pandora = exampleGraph.addVertex('Pandora');
  const narnia = exampleGraph.addVertex('Narnia');
  const naboo = exampleGraph.addVertex('Naboo');

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
    // console. log(neighbors);
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

  it('Can properly do a breadth first traversal of the graph with undirected edges', () => {


    exampleGraph.addUnDirectedEdge(narnia, naboo, 250);
    exampleGraph.addUnDirectedEdge(pandora, arendelle, 150);
    exampleGraph.addUnDirectedEdge(arendelle, metroville, 99);
    exampleGraph.addUnDirectedEdge(metroville, narnia, 37);
    exampleGraph.addUnDirectedEdge(metroville, naboo, 26);
    exampleGraph.addUnDirectedEdge(arendelle, monstropolis, 42);
    exampleGraph.addUnDirectedEdge(monstropolis, naboo, 73);
    exampleGraph.addUnDirectedEdge(metroville, monstropolis, 105);

    let bfs = exampleGraph.breadthFirstSearch(pandora);
    const array = Array.from(bfs);
    expect(array).toStrictEqual(
      [
        pandora,
        arendelle,
        metroville,
        monstropolis,
        narnia,
        naboo
      ]);
  });

  it('Can properly do a breadth first traversal of the graph with directed edges', () => {
    let bfs2 = graph.breadthFirstSearch(vertex1);
    const array2 = Array.from(bfs2);
    expect(array2).toStrictEqual(
      [
        vertex1,
        vertex2,
        vertex4,
        vertex3,
        vertex5
      ]);
  });

  it('Can return true and correct cost if there is a direct flight on a multi location trip ', () => {
    exampleGraph.addUnDirectedEdge(pandora, metroville, 82);

    let result = getEdges(exampleGraph, ['Arendelle', 'Monstropolis', 'Naboo']);
    expect(result).toStrictEqual([true, 115]);

    result = getEdges(exampleGraph, ['Metroville', 'Pandora']);
    expect(result).toStrictEqual([true, 82]);
  });

  it('Can return false and $0 if there is no direct flight', () => {
    let res = getEdges(exampleGraph, ['Naboo', 'Pandora', 'Arendelle']);
    expect(res).toStrictEqual([false, 0]);

    res = getEdges(exampleGraph, ['Narnia', 'Arendelle', 'Naboo']);
    expect(res).toStrictEqual([false, 0]);

    res = getEdges(exampleGraph, ['Naboo', 'Metropolis', 'Pandora']);
    expect(res).toStrictEqual([false, 0]);

  });
});
