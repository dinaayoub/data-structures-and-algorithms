'use strict';
/*
Tests:
Can successfully instantiate an empty tree
Can successfully instantiate a tree with a single root node
Can successfully add a left child and right child to a single root node
Can successfully return a collection from a preorder traversal
Can successfully return a collection from an inorder traversal
Can successfully return a collection from a postorder traversal
*/

const BinaryTree = require('../binary-tree');
const Node = require('../node');

describe('Binary Tree', () => {

  var binaryTree;

  it('Can successfully instantiate an empty tree', () => {
    binaryTree = new BinaryTree();
    expect(binaryTree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    binaryTree.root = new Node(60);
  });

  it('Can successfully add a left child and right child to a single root node', ()=>{
    binaryTree.root.left = new Node(50);
    binaryTree.root.right = new Node(70);
    binaryTree.root.left.left = new Node(40);
    binaryTree.root.left.right = new Node(55);
    expect(binaryTree.root).not.toBe(null);
    expect(binaryTree.root.left).not.toBe(null);
    expect(binaryTree.root.right).not.toBe(null);
  });


  it('Can successfully return a collection from an in-order traversal', () => {
    expect(binaryTree.preOrder(binaryTree.root)).toStrictEqual([60, 50, 40, 55, 70]);
  });

  it('Can successfully return a collection from an in-order traversal', () => {
    expect(binaryTree.inOrder(binaryTree.root)).toStrictEqual([40, 50, 55, 60, 70]);
  });

  it('Can successfully return a collection from a post-order traversal', () => {
    expect(binaryTree.postOrder(binaryTree.root)).toStrictEqual([40, 55, 50, 70, 60]);
  });

  it('Can successfully return the maximum value in the tree', () => {
    binaryTree.root.left.left.left = new Node(10);
    binaryTree.root.left.left.right= new Node(104);
    binaryTree.root.left.right.left = new Node(505);
    binaryTree.root.left.right.right = new Node(525);
    expect(binaryTree.getMax()).toBe(525);
  });

});
