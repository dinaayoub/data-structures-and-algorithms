'use strict';

const BinarySearchTree = require('../binary-search-tree');

describe('Binary Search Tree', ()=>{
  var binarySearchTree = new BinarySearchTree();

  it('Can successfully add nodes in the correct location', () =>{
    binarySearchTree.add(60);
    binarySearchTree.add(50);
    binarySearchTree.add(70);
    binarySearchTree.add(40);
    binarySearchTree.add(55);
    expect(binarySearchTree.preOrder(binarySearchTree.root)).toStrictEqual([60, 50, 40, 55, 70]);
  });

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
