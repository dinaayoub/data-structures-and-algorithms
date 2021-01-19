'use strict';
const Node = require('../../node');
const BinaryTree = require('../../binary-tree');
const BinarySearchTree = require('../../binary-search-tree');
const treeIntersection = require('../tree-intersection');

describe('Tree Intersection', () => {

  //initialize some sample trees
  const tree1 = new BinaryTree();
  const tree2 = new BinaryTree();
  const bst1 = new BinarySearchTree();
  const bst2 = new BinarySearchTree();

  tree1.root = new Node(150);
  tree1.root.left = new Node(100);
  tree1.root.right = new Node(250);
  tree1.root.left.left = new Node(75);
  tree1.root.left.right = new Node(160);
  tree1.root.right.left = new Node(200);
  tree1.root.right.right = new Node(350);
  tree1.root.left.right.left = new Node(125);
  tree1.root.left.right.right = new Node(175);
  tree1.root.right.right.left = new Node(300);
  tree1.root.right.right.right = new Node(500);

  tree2.root= new Node(42);
  tree2.root.left = new Node(100);
  tree2.root.right = new Node(600);
  tree2.root.left.left = new Node(15);
  tree2.root.left.right= new Node(160);
  tree2.root.right.left = new Node(200);
  tree2.root.right.right = new Node(350);
  tree2.root.left.right.left = new Node(125);
  tree2.root.left.right.right = new Node(175);
  tree2.root.right.right.left = new Node(4);
  tree2.root.right.right.right = new Node(500);

  bst1.add(150);
  bst1.add(100);
  bst1.add(250);
  bst1.add(75);
  bst1.add(160);
  bst1.add(200);
  bst1.add(350);
  bst1.add(125);
  bst1.add(175);
  bst1.add(350);
  bst1.add(300);
  bst1.add(500);

  bst2.add(42);
  bst2.add(100);
  bst2.add(600);
  bst2.add(15);
  bst2.add(160);
  bst2.add(200);
  bst2.add(350);
  bst2.add(125);
  bst2.add(175);
  bst2.add(4);
  bst2.add(500);


  it('Can return the correct results for two binary trees', () => {
    var resultsArray = treeIntersection(tree1, tree2);
    expect(resultsArray).toEqual([100,160,125,175,200,350,500]);
  });

  it('Can return the correct results for two binary search trees', () => {
    var resultsArray = treeIntersection(bst1, bst2);
    expect(resultsArray).toEqual([ 100, 160, 125, 200, 175, 350, 500 ]);
  });
  it('Can return the correct results if there are duplicates within the same tree', () => {
    //edit the trees to add duplicates
    tree1.root.left.left.value = 100;
    var resultsArray = treeIntersection(tree1,tree2);
    expect (resultsArray).toEqual([100,160,125,175,200,350,500]);
    tree2.root.left.left.value = 100;
  });

  it('Can return empty array if either or both of the trees are empty', () => {
    var resultsArray = treeIntersection(tree1, new BinaryTree());
    expect (resultsArray).toEqual([]);
    resultsArray = treeIntersection(new BinaryTree(), tree2);
    expect (resultsArray).toEqual([]);
    resultsArray = treeIntersection(new BinaryTree(), new BinaryTree());
    expect (resultsArray).toEqual([]);
  });
});
