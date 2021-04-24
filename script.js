//write a function that calculates the sum of all the numbers from 1 up to (and including) some n.

//Solution 1
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//       total += i;
//     }
//     console.log(total);
// }

// addUpTo(6);

//Solution 2
// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }

// 1 = 1
// 2 = 3
// 3 = 6
// 4 = 10
// 5 = 15
// 6 = 21
//Faster, less memory-intensive and more readable
//performance.() -> use to check the time of functions

// function countUpAndDown (n) {
//     console.log("Going up!");
//     for(let i = 0; i < n; i++){
//         console.log(i);
//     }
//     console.log("At the top!\nGoingDown...");
//     for(let j = n-1; j >= 0; j--){
//         console.log(j);
//     }
//     console.log("Back down. Bye!");
// }

// countUpAndDown(11);

// function printAllPairs(n) {
//     for(let i = 0; i < n; i++){
//         console.log(i);
//         for(let j = 0; j<n; j++){
//             console.log(" = " + i,j);
//         }
//     }
// }

// printAllPairs(10);
//the second loop will be the code, what will happen to first value
//first loop = O(n)
//second loop = O(n)
//O(n) operation inside of an O(n) operation.
// O(n*n) or O(n squared)

// function logAtLeast5(n) {
//     for(let i = 1; i <= Math.max(5,n); i++){
//         console.log(i);
//     }
// }

//If N grows, the number of operations grows in proportion with N

function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
      console.log(i);
    }
  }

// logAtLeast5(10)
logAtMost5(10);

//Simplify the big O expression as much as possible - O(n + 10)
//Simplify the big O expression as much as possible - O(100 * n)
//Simplify the following big O expression as much as possible - O(25)
//Simplify the following big O expression as much as possible -  O(n^2 + n^3)
//Simplify the following big O expression as much as possible - O(n + n + n + n) 

//O(n) - LINEAR
//O(n) - LINEAR
//O(1) - CONSTANTS
//O(n^3) - CUBIC
//O(n) - LINEAR