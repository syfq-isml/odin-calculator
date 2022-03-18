function add(a,b) {
    return +a + +b;
}

function subtract(a,b) {
    return +a - +b;
}

function multiply(a,b) {
    return +a * +b;
}

function divide(a,b) {
    return +a / +b;
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

let btnsOperators = document.querySelectorAll('button.operators');
btnsOperators.forEach((btn) => btn.addEventListener('click', takeOperator));

let btnNumbers = document.querySelectorAll('button.numbers');
btnNumbers.forEach((btn) => btn.addEventListener("click", makeNumberArray));

let equalBtn = document.querySelector('#equals-button');
equalBtn.addEventListener('click', doOperate);

function doOperate() {
    console.log(result);
    result = operate(operator, number1, number2);
    console.log(result);
    displayNumbers.innerHTML = result;
}





// function(e) {
    
//     if (e.target.className === 'numbers') makeNumberArray();
//     else if (e.target.className === 'operators') console.log('Clicked operator');
// }));

// function categoriser(e) {
//     if (e.target.className === 'numbers') makeNumberArray;
//     else if (e.target.className === 'operators') console.log('Clicked operator');
// }


function makeNumberArray(e) { // takes in button content and put into array
    console.log(operator);
    if (operator === undefined) {
        console.log(numberArray1);
        numberArray1.push(e.target.textContent); 
        console.log(numberArray1);
        showNumber();
    } else { 
        console.log(numberArray2);
        numberArray2.push(e.target.textContent); 
        console.log(numberArray2);
        showNumber();
    }
}

function showNumber() { //change array into string and print on display
    if (operator === undefined) {
        console.log(number1);
        number1 = numberArray1.join('');
        displayNumbers.innerHTML = number1;
        console.log(number1);
    } else {
        console.log(number2);
        number2 = numberArray2.join('');
        displayNumbers.innerHTML = number2;
        console.log(number2);
    }
}

function takeOperator(e) {
    operator = e.target.textContent;
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