# Anagram Pair Counter

This repository contains a JavaScript function that counts the number of anagram pairs in a given array of integers. The function is called `solution` and takes an array of integers as its argument.

## Function overview

```javascript
function solution(a) {}
```

### Input 

- `a`: An array of integers, where `1 <= a.length <= 10^4` and `1 <= a[i] <= 10^9`.

### Output

- Returns an integer, which is the count of anagram pairs in the given array.

## How it works

The function `solution` performs the following steps: 
1. Initializes a counter variable `counter` to store the total number of anagram pairs. 
2. Initializes an object `counts` to store the frequency of each unique anagram key. 
3. Iterates through the input array `a`:
a. Converts each integer to a sorted string representation.
b. Increments the count for each unique anagram key in `counts`. 
4. Iterates through the `counts` object:
a. For each anagram key with a count of two or more, calculates the number of possible pairs and adds it to the `counter`. 
5. Returns the `counter` value as the final output.
6. 
## Example

```javascript
let inputArray = [25, 52, 882, 228, 528, 825];
let result = solution(inputArray);
console.log(result); // Output: 4
```

In this example, the anagram pairs are (25, 52), (882, 228), (25, 52, 528), and (882, 825, 228). The function returns the count of anagram pairs, which is 4.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) .
