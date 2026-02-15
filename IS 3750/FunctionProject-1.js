//  1) inputNumber
function inputNumber(message) {
    let value;

    do {
    let input = prompt(message);
    value = Number(input);

    if (isNaN(value)) {
    alert("Please enter a valid number");
    }
} while (isNaN(value));

return value;
}

//  2) normalizeString (lambda syntax)
const normalizeString = (str) => {
return str.trim().toLowerCase();
};

//  3) capitalize
function capitalize(str) {
if (!str || str.length === 0) return str;

let first = str.substring(0, 1).toUpperCase();
let rest = str.substring(1).toLowerCase();
return first + rest;
}

//  4) cleanString
function cleanString(str) {
return capitalize(normalizeString(str));
}

//  5) sumArray
function sumArray(arr) {
let sum = 0;

for (let item of arr) {
    if (typeof item === "number") {
    sum += item;
    }
}

return sum;
}

//  6) smallest number in array
function smallestNumber(arr) {
let smallest = null;

for (let item of arr) {
    if (typeof item === "number") {
    if (smallest === null || item < smallest) {
        smallest = item;
    }
    }
}

return smallest;
}

//  7) inputRange
function inputRange(min, max, message) {
let value;

do {
    value = inputNumber(message);
} while (value < min || value > max);

return value;
}

//  8) better rounding function
function betterRound(num, decimals) {
return Number(num.toFixed(decimals));
}

//  9) title function
function title(str) {
let words = str.split(" ");
let result = [];

for (let word of words) {
    if (word.length > 0) {
    result.push(capitalize(normalizeString(word)));
    }
}

return result.join(" ");
}

// 10) applyFunctionsToArray
function applyFunctionsToArray(dataArray, transformations) {
let result = [];

for (let item of dataArray) {
    let transformed = item;

    for (let func of transformations) {
    transformed = func(transformed);
    }

    result.push(transformed);
}

return result;
}
