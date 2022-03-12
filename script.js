function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(operator, num1, num2) {
    if (operator === '+')
        add(num1,num2);
    else if (operator === '-')
        subtract(num1,num2);
    else if (operator === '*')
        multiply(num1,num2);
    else if (operator === '/')
        divide(num1,num2);
}


let displayNumbers = document.getElementById('display-numbers');

// function to populate display when a button is clicked
// function populateDisplay(e) {
//     console.log(e.target.textContent);
//     displayNumbers.innerHTML = e.target.textContent;


// try by array -- receive button text, put text into array, pass on to next function to print, next function takes in array, shows array elements as a string //

let numberArray = [];
let number;
let btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener("click", makeNumberArray));

// function(e) {
    
//     if (e.target.className === 'numbers') makeNumberArray();
//     else if (e.target.className === 'operators') console.log('Clicked operator');
// }));

// function categoriser(e) {
//     if (e.target.className === 'numbers') makeNumberArray;
//     else if (e.target.className === 'operators') console.log('Clicked operator');
// }


function makeNumberArray(e) { // takes in button content and put into array
    console.log(numberArray);
    numberArray.push(e.target.textContent);   
    console.log(numberArray);
    showNumber();
}

function showNumber() { //change array into string and print on display
    console.log(number);
    number = numberArray.join('');
    displayNumbers.innerHTML = number;
    console.log(number);
}