# Challenge Summary

Code challenge for class 30: hash tables

Solution by Dina Ayoub

## Challenge Description

* Implement a Hashtable with the following methods:
  * add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
  * get: takes in the key and returns the value from the table.
  * contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
  * hash: takes in an arbitrary key and returns an index in the collection.

## Efficiency (Big O)

* add:
  * Time –  O(1) since I always insert at the start of the linked list which is more efficient than inserting at the end (which would be O(k)) where k is length of the bucket
  * Space – O(1)
* contains:
  * Time - O(1) best case scenario, and O(k) worst case scenario where k is length of the bucket
  * Space - O(1)
* get:
  * Time - O(1) best case scenario, and O(k) worst case scenario where k is length of the bucket
  * Space - O(n)
* hash:
  * Time - O(1)
  * Space - O(1)

## Tests

* [x] Can add a key value pair to the hash table.
* [x] Can retrieve a value based on the key.
* [x] Can successfully return null for a key that does not exist in the hashtable when using "get" function.
* [x] Can successfully handle a collision within the hashtable & retrieve the correct value.
* [x] Can successfully tell us whether the data structure `contains` the key provided (both true and false tested).

This covers all of the required tests as named in the assignment:

* [x] Adding a key/value to your hashtable results in the value being in the data structure
* [x] Retrieving based on a key returns the value stored
* [x] Successfully returns null for a key that does not exist in the hashtable
* [x] Successfully handle a collision within the hashtable
* [x] Successfully retrieve a value from a bucket within the hashtable that has a collision
* [x] Successfully hash a key to an in-range value
