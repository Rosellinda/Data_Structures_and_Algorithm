//OBJECTS

//unordered, key value pairs!

let instructor = {
    firtsname: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

//When to use objects
//-> When you don't need order
//-> When you need fast access / insertion and removal

//Big O of Objects
//Insertion - O(1)
//Removal - O(1)
//Searching - O(N)
//Access - O(1)
// When you don't need any ordering, objects are an excellect choice!

//Big O of Object Methods
//Object.keys - O(N)
//Object.values - O(N)
//Object.entries - O(N)
//hasOwnProperty - O(1)