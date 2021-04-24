//PROBLEM SOLVING
//Understand the Problem
//Explore Concrete Examples
//Break It Down
//Solve/Simplify
//Look Back and Refactor

//What is an Algorithm? A process or set of steps to accomplish a certain task.

// function sumOfTwo(a,b){
//     console.log(a+b);
// }

// sumOfTwo(2,3);

//Explore examples
//Start with simple Examples
//progress to more complex examples
//explore examples with empty inputs
//explore examples with invalid inputs

//============================================
//Write a function which takes two numbers and returns their sum
//============================================

//1. Can I restate the problem in my own words?
    //"Implement Addition"
//2. What are the inputs that go into the problem?
    // - ints?
    // - floats?
    // - what about string for large numbers
//3. What are the outputs that should come from the solution to the problem?
    // - int? float? string?
//4. Can the outputs be determined from the inputs? In other words, do I have enough
//      information to solve the problem?

//5. How should I label the important pieces of data that are a part of the problem?



//Write a function which takes in a string and returns counts of each character in the string.
// function countString(str){
//     //make object to return the str
//     let result = {};
//     //loop over the string, for each character
//     for(let i = 0; i < str.length; i++){
//         result = i + " : " + str[i];
//         //return the number
//         console.log(result);
//     }
// }


function charCount(str){
    //make object to return at end
    let result = {};
    //loop over string, for each character...
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        //if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0){
            result[char]++;
        }
        //If the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1
        };
    }
        //if character is something else (space, period, etc.) don't do anything
    //return object at end
    console.log(result);
}
// countString("Hello");
charCount("Hello");