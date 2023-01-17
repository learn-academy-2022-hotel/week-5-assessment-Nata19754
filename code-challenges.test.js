// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.


describe( "codeMess", () => {
    it("takes in a string and returns a string with a coded message", () => {
    expect (codeMess(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect (codeMess(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect (codeMess(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
})

//GOOD FAIL:
//  FAIL  ./code-challenges.test.js
//   codeMess
//   ✕ takes in a string and returns a string with a coded message (1 ms)
// ● codeMess › takes in a string and returns a string with a coded message
//   ReferenceError: codeMess is not defined


// b) Create the function that makes the test pass.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

//PSEUDOCODE:
//Input: A string
//Output: A string with coded message
//Process:
//Created an object called stand of key/value pairs that include the original letters lower and uppercase and their replacement valuex
//Create a function called codeMess that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
//Use replace method in function to have it return a new string with the letters in the string replaced by numbers as specify in object.
//[aeiou] will be the character class and I will use the g and i flags to determine how the regular expression will behave.
//In this case I will use both (g) an (i) since i want g(to find all matches) and i(case sensitive)
// once the replacing values have been determined, they will be replaced by the values in the object stand, this will replace all the accurrences of the letter in the calls with the numbers
//Call back function with test variables given

const stand = {
    a:4,
    e:3,
    i:1,
    o:0,
    A:4,
    E:3,
    I:1,
    O:0,
};


const codeMess = (str) => {
  return str.replace(/[aeio]/gi, (m) => stand[m])
}

console.log(codeMess(secretCodeWord1))
console.log(codeMess(secretCodeWord2))
console.log(codeMess(secretCodeWord3))
//  Would love to get some feedback on why the i flag works when using it in square brackets above, but not when referrengto an object

//PASSING TEST:
//console.log
// L4ck4d41s1c4l
// at Object.log (code-challenges.test.js:71:9)
// console.log
// G0bbl3dyg00k
// at Object.log (code-challenges.test.js:72:9)
// console.log
// 3cc3ntr1c
// at Object.log (code-challenges.test.js:73:9)
// console.log
// [ 'Cherry', 'Blueberry', 'Peach' ]
// at Object.log (code-challenges.test.js:128:9)
// PASS  ./code-challenges.test.js
// codeMess
// ✓ takes in a string and returns a string with a coded message (1 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.


describe( "thatLetter", () => {
    it("that takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    expect (thatLetter(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect (thatLetter(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })
})


//GOOD FAIL:
// FAIL  ./code-challenges.test.js
// thatLetter
// ✕ that takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)

// ● thatLetter › that takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// ReferenceError: thatLetter is not defined


// b) Create the function that makes the test pass.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

//PSEUDOCODE:
//Input: An array of strings and a single letter as arguments
//Output: New array of all the words containing the letter that was passed as an argument
//Process:
//Create a function called thatLetter that takes in an array of words and a single letter and returns an array of all the words containing that particular letter
//Use filter method which creates a new array filled with the elements that pass a test provided by a function
//Filter array items based on search criteria (letter)


const thatLetter = (array,letter) => {

  return array.filter((array) => array.toLowerCase().includes(letter))
}


console.log(thatLetter(fruitArray,letterA));
console.log(thatLetter(fruitArray,letterE));


//PASSING TEST:
// console.log
// [ 'Mango', 'Apricot', 'Peach' ]
//   at Object.log (code-challenges.test.js:145:9)
// console.log
// [ 'Cherry', 'Blueberry', 'Peach' ]
//   at Object.log (code-challenges.test.js:146:9)
// console.log
// [Function: fullHouse]
//   at Object.log (code-challenges.test.js:211:11)
// PASS  ./code-challenges.test.js
// thatLetter



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe( "fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    expect (fullHouse(hand1)).toEqual(true)
    expect (fullHouse(hand2)).toEqual(false)
    expect (fullHouse(hand3)).toEqual(false)
    expect (fullHouse(hand4)).toEqual(true)

    })
})

//GOOD FAIL:
// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a full house
// ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house
//   ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

//PSEUDOCODE:
//Input: An array of 5 numbers
//Output: Boolean value (true or false) which tells us if the numbers make a full house or not
//Process:
//Create a function called fullHouse that takes in an array of words and a single letter and returns an array of all the words containing that particular letter
//Use the filter method to get an array of numbers that match index 0
//Use the find method to find the first instance of a number that DOES NOT match the index 0 (opposing of before)
//Use filter method once again, to create a new separate array of numbers that match the output of the secondM array
//If matchingSet1 is a pair and the matchingSet2 is three of a kind, return true
//If matchingSet2 is a pair and the matchingSet1 is three of a kind, return true
//Else, return false
//Callback function and used test variables provided

const fullHouse = (arr) => {
  let matchingSet1 = arr.filter(value => value === arr[0])
  let secondM = arr.find(value => value !== arr[0])
  let matchingSet2 = arr.filter(value => value === secondM)
  return (matchingSet1.length === 2 && matchingSet2.length === 3) || (matchingSet1.length ===3 && matchingSet2.length === 2) ?
true : false  
}

  console.log(fullHouse(hand1))
  console.log(fullHouse(hand2))
  console.log(fullHouse(hand3))
  console.log(fullHouse(hand4))

//PASSING TEST:
// console.log
// true
// at Object.log (code-challenges.test.js:214:11)
// console.log
// false
// at Object.log (code-challenges.test.js:215:11)
// console.log
// false
// at Object.log (code-challenges.test.js:216:11)
// console.log
// true
// at Object.log (code-challenges.test.js:217:11)
// PASS  ./code-challenges.test.js
// fullHouse
// ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (1 ms)