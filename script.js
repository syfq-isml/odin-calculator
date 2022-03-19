function add(a,b) {
    return round(+a + +b,2);
}

function subtract(a,b) {
    return round(+a - +b, 2);
}

function multiply(a,b) {
    return round(+a * +b, 2);
}

function divide(a,b) {
    if (+b === 0) {
        alert("Don't try to be funny...");
        return round(+a/1);
    }
    else return round(+a / +b, 2);
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

function operate(operator, num1, num2) {
 
    if (operator === '+')
        return add(num1,num2);
    else if (operator === '-')
        return subtract(num1,num2);
    else if (operator === '*')
        return multiply(num1,num2);
    else if (operator === '/')
        return divide(num1,num2);
}


let displayNumbers = document.getElementById('display-numbers');

// function to populate display when a button is clicked
// function populateDisplay(e) {
//     console.log(e.target.textContent);
//     displayNumbers.innerHTML = e.target.textContent;


// try by array -- receive button text, put text into array, pass on to next function to print, next function takes in array, shows array elements as a string //

let numberArray1 = [];
let numberArray2 = [];
let number1;
let number2;
let operator;
let result;
let pressedRecently = 'yes';
let onEquals = '';


let btnsOperators = document.querySelectorAll('button.operators');
btnsOperators.forEach((btn) => btn.addEventListener('click', takeOperator));

let btnNumbers = document.querySelectorAll('button.numbers');
btnNumbers.forEach((btn) => btn.addEventListener("click", makeNumberArray));

let equalBtn = document.querySelector('#equals-button');
equalBtn.addEventListener('click', doOperateEquals);

let clrBtn = document.querySelector('#clear-button');
clrBtn.addEventListener('click', clearDisplay);

let decBtn = document.querySelector('#decimal-button');
decBtn.addEventListener("click", addPoint);


function addPoint(e) {
    if (displayNumbers.innerHTML.includes('.')) return;
    makeNumberArray(e);
}

function doOperateEquals() {
    if (pressedRecently === 'yes') return;
    if (number1 === undefined || number2 === undefined) return;

    if (result === undefined) {
        console.log(result);
        result = operate(operator, number1, number2);
        console.log(result);
        displayNumbers.innerHTML = result;
        numberArray2 = [];
        pressedRecently = 'yes';
    } else {
        result = operate(operator, result, number2);
        displayNumbers.innerHTML = result;
        numberArray2 = [];
        pressedRecently = 'yes';
    }
    
}

function doOperate() {
    if (pressedRecently === 'yes') return;

    if (result === undefined) {
        console.log(result);
        result = operate(operator, number1, number2);
        console.log(result);
        displayNumbers.innerHTML = result;
        numberArray2 = [];
        pressedRecently = 'no';
        return;
    } else {
        result = operate(operator, result, number2);
        displayNumbers.innerHTML = result;
        numberArray2 = [];
        pressedRecently = 'no';
    }
}

function makeNumberArray(e) { // takes in button content and put into array
    console.log(operator);
    pressedRecently = 'no';

    if (operator === undefined) {
        if (numberArray1.length>9) return;
        numberArray1.push(e.target.textContent); 
        showNumber();
    } else { 
        numberArray2.push(e.target.textContent); 
        if (numberArray2.length>9) return;
        showNumber();
    }
}

function showNumber() { //change array into string and print on display
    if (operator === undefined) {
        number1 = numberArray1.join('');
        displayNumbers.innerHTML = number1;
    } else {
        number2 = numberArray2.join('');
        displayNumbers.innerHTML = number2;
    }
}

function takeOperator(e) {
    //handle cases where operator is clicked before a number
    if (number1 === undefined && number2 === undefined) return;

    operator = e.target.textContent;

    //handles cases where operator now behaves like an equal
    if (number2 !== undefined) {
        doOperate();
    }
    
}

function clearDisplay() {
    pressedRecently = 'yes';
    numberArray1 = [];
    numberArray2 = [];
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    result = undefined;
    displayNumbers.innerHTML = '';
}

/* PLANNING

(using 1 array)
take number
put into array
print number
IF operator is chosen
    clear screen when next number button is pressed
    store operator (1)
    take number
    put into array
    IF equals is chosen
        calculate result (operate)
        clear screen
        print result
    IF another operator is chosen
        calculate result (operate)
        clear screen
        print result
        loop back to (1)

*/