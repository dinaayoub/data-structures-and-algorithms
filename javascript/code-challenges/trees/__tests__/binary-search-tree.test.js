'use strict';

const BinarySearchTree = require('../binary-search-tree');
const Node = require('../node');

describe('Binary Search Tree', ()=>{
  var binarySearchTree = new BinarySearchTree();
  binarySearchTree.root = new Node(60);
  binarySearchTree.root.left = new Node(50);
  binarySearchTree.root.right = new Node(70);
  binarySearchTree.root.left.left = new Node(40);
  binarySearchTree.root.left.right = new Node(55);

  it('Can successfully return false if a tree does not contain the item we are searching for', ()=>{
    expect(binarySearchTree.contains(22)).toBe(false);
    expect(binarySearchTree.contains(-1)).toBe(false);
    expect(binarySearchTree.contains(65)).toBe(false);
    expect(binarySearchTree.contains(0)).toBe(false);
  });

  it('Can successfully throw an error if not sent a parameter to search for', ()=>{
    expect(() => {
      binarySearchTree.contains();
    }).toThrow();
    expect(() => {
      binarySearchTree.contains('');
    }).toThrow();
    expect(() => {
      binarySearchTree.contains(null);
    }).toThrow();
    expect(() => {
      binarySearchTree.contains(undefined);
    }).toThrow();
  });

  it('Can successfully return true if a tree contains the item we are searching for', () => {
    expect(binarySearchTree.contains(55)).toBe(true);
    expect(binarySearchTree.contains(60)).toBe(true);
    expect(binarySearchTree.contains(50)).toBe(true);
    expect(binarySearchTree.contains(40)).toBe(true);
    expect(binarySearchTree.contains(70)).toBe(true);
  });

});
