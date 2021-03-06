# Trees 

By Dina Ayoub
<!-- Short summary or background information -->
[Summary of trees](https://github.com/dinaayoub/reading-notes/blob/gh-pages/401/class-15.md)

## Challenge

- [x] Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

### Binary Tree

- [x] Create a BinaryTree class
- [x] Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
- [x] Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
- [x] Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.
- [x] Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

### Binary Search Tree

- [x] Create a BinarySearchTree class
- [x] Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- [x] Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency

## Binary Tree

Traversal: O(n)
findMax value: O(n) time, O(1) space.
![Find Max Value](assets/findMaxValue.png)

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
- [x] Can succesfully find the max value in the tree
- [x] Can successfully return an array with the result of a breadth-first traversal of the binary tree.

### Binary Search Tree Tests

- [x] Can successfully add nodes in the correct location to maintain order
- [x] Can successfully return false if the tree does not contain the value we are looking for
- [x] Can successfully return true if the tree contains the value we are looking for
- [x] Can successfully throw an error if not sent a parameter to search for
