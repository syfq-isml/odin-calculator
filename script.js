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
let result;
let btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener("click", makeNumberArray));

// let btnsOperators = document.querySelectorAll('button.operators');
// btnsOperators.forEach((btn) => btn.addEventListener('click', takeOperator));

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

function takeOperator(e) {

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