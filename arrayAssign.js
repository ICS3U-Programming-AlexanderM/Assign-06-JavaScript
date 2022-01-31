// Created in: JavaScript version ES2015
// (I don't know the shebang for JavaScript)

// Created by: Alexander Matheson
// Created on: Jan 31 2022
// This program finds the product of
// all numbers in an array, it then
// splits this array in half.

// allow for input
var readline = require('readline-sync');

// declare constant
const MAX_NUM = 6;


// function to split the array in half
function splitArray(originalArr, firstList, secondList) {
    // declare variables
    var range;
    var counter;
    var counter2;
    // find range of each half
    range = MAX_NUM;
    range = range / 2;
    range = Math.round(range);
    // for the first half
    for (counter = 0; counter < range; counter++) {
        firstList.push(originalArr[counter]);
    }
    // for the second half
    for (counter2 = counter; counter2 < range * 2; counter2++) {
        secondList.push(originalArr[counter2]);
    }
}


// function to find the product
function findProduct(array) {
    // declare variables
    var product = 1;
    var counter;
    // loop to find product
    for (counter = 0; counter < MAX_NUM; counter++) {
        product = product * array[counter];
    }
    return product;
}


// declare variables and arrays
var numArray = [];
var inputString;
var inputFloat;
var productMain;
var counter = 0;
var list1 = [];
var list2 = [];
// loop to get input
do {
    inputString = readline.question("Enter a number: ");
    // error checking
    try {
        inputFloat = parseFloat(inputString);
        if(isNaN(inputString)) throw "is not a number";
        numArray.push(inputFloat);
        counter = counter + 1;
    } catch (err) {
        console.log("Invaid input, try again.");
        continue;
    }
} while (counter < MAX_NUM);
// call functions
productMain = findProduct(numArray);
splitArray(numArray, list1, list2);
// display results
console.log("The first half of this list is: " + list1);
console.log("The second half is: " + list2);
console.log("The product is: " + productMain);
