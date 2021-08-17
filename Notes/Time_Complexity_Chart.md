# Dynamic Array

| Operation                                     | Time Complexity  |
| ---------------------------------------       | ---------------- |
| Accessing an element (anywhere in the array)  | O(1)             |
| Insert/Delete at the beginning                | O(n)             |
| Insert/Delete at the end                      | O(1)             |
| Insert/delete in the middle                   | O(n)             |

# Hash Tables / Dictionaries / Set

| Algorithm                                     | Average          | Worst            |
| ---------------------------------------       | ---------------- | ---------------- |
| Search                                        | O(1)             | O(n)             |
| Insert                                        | O(1)             | O(n)             |
| Delete                                        | O(1)             | O(n)             |
| Space Complexity                              | O(n)             | O(n)             |

# Binary Heap

| Operation                                     | Time Complexity  |
| ---------------------------------------       | ---------------- |
| Find min                                      | O(1)             |
| Delete min                                    | O(log n)         |
| Insert                                        | O(log n)         |
| Decrease Key                                  | O(log n)         |

# Binary Search Tree (BST) 

| Algorithm                                     | Average              | Worst            |
| ---------------------------------------       | ----------------     | ---------------- |
| Search                                        | O(log n)             | O(n)             |
| Insert                                        | O(log n)             | O(n)             |
| Delete                                        | O(log n)             | O(n)             |
| Space Complexity                              | O(n)                 | O(n)             |

# Linked List

| Operation                                     | Time Complexity                                     |
| ---------------------------------------       | ----------------                                    |
| Finding a value                               | O(n)                                                |
| Insert/delete at beginning                    | O(1)                                                |
| Insert/delete at end                          | O(1)  when last element is known                    |
|                                               | O(n)  when last element is unknown                  |
| Insert/delete in middle                       | O(m)  where m is the position you're inserting into |

----------------------------------------------------------------------------------------------------------

---------------------------------Best to Fair----------------------------
- Constant Time O(1) - *O* of 1
    - for any size n, the time of completion doesn't change
    - number of operations doesnt change based on input size n
    - ex. indexing into a list, loop that runs a set number of times, accessing by key into a dict
- Logarithmic Time O(log n) 
    - use a sorted list, find the midpoint and ignore half the list
- Linear Time O(n) 
    - the number of operations increases in direct proportion to the input size n 
    - have to go through each input one at a time
    - ex. a single for loop, counting coins

---------------------------------Bad to Worst------------------------------
- Log-linear Time O(n log n) 
    - doing additional work on every element in a list
    - mainly only applies to sorting1
- Quadratic Time O(n^2) 
    - ex. nested loops
    - runtime increases by 10x
- Exponential Time O(2^n) 
    - as n increases the number of lested loops increases
    - cracking an unknown password