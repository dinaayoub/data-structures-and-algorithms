# Trees 

By Dina Ayoub
<!-- Short summary or background information -->
[Summary of trees](https://github.com/dinaayoub/reading-notes/blob/gh-pages/401/class-15.md)

## Challenge

- [x] Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- [x] Create a BinaryTree class
- [x] Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
- [x] Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
- [x] Create a BinarySearchTree class
- [x] Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- [x] Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency

## Binary Tree

Traversal: O(n)

## Binary Search Tree

Traversal: O(h) where h is the height of the tree. In a balanced tree, that would be O(log n).
Add (insert): O(h)

## Testing

### Binary Tree Tests

- [x] Can successfully instantiate an empty tree
- [x] Can successfully instantiate a tree with a single root node
- [x] Can successfully add a left child and right child to a single root node
- [x] Can successfully return a collection from a preorder traversal
- [x] Can successfully return a collection from an inorder traversal
- [x] Can successfully return a collection from a postorder traversal

### Binary Search Tree Tests

- [x] Can successfully add nodes in the correct location to maintain order
- [x] Can successfully return false if the tree does not contain the value we are looking for
- [x] Can successfully return true if the tree contains the value we are looking for
- [x] Can successfully throw an error if not sent a parameter to search for
