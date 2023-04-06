# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

My solution:
1. parameters - uses ...args to indicate an arbitary number of arguments
2. initialize empty array
3. uses for-of loop to loop through each item in the array instead of weird .forEach function 
4. check whether the inputted arguements include the item that is being looped through 
5. if it is not included , push it or (add in the end) of the empty array arr
6. return the array

  