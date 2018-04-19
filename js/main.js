/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;


// Initialized variable `isInteger` to use as a control value for the
// `while` loop.

isInteger = false;

//Created a `while` loop to prompt user to enter a number until they enter a good number. 

while(!isInteger) {
    //Prompted user for the `maxNumber` value
    maxNumber = prompt('Enter a number over zero (must be an integer):', 20);

    //Used a conditional to verify if the `maxNumber is a suitable integer
    maxNumber = parseInt(maxNumber);

    //Set value to change so `while` loop will stop looping if the number is suitable
    if (Number.isSafeInteger(maxNumber) && maxNumber >0){
        isInteger = true;
    
    }
}

//Initialized the `fbResults` variable to an empty array

fbResults = [];

//Created a `for` loop that will execute the `maxNumber` of times.

for (let i=1; i <= maxNumber; i++) {

// Created logic inside the `for` loop to calculate FizzBuzz and stored results of logic in 
// array called `fbResults`

if (i % 15 == 0) {
    fbResults.push('FizzBuzz');
} else if (i % 3 == 0) {
    fbResults.push('Fizz');
} else if (i % 5 == 0) {
    fbResults.push('Buzz');
} else {
    fbResults.push(i);
}
}

// Initialized the `fbText` variable to eqaul an empty string.

fbText = '';

//Used a `for ... of` loop to concatenate the values from `fbResults`
// into the variable `fbText`.

for (let result of fbResults) {
    fbText =fbText + result + "\n";
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
