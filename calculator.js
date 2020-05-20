// create a variable for the number being displayed
    // make it equal an empty string
let displayString = '';

// create a variable array of numbers
    // make it equal an empty array
    let numberArray = [];

// select the display section of the calculator using DOCUMENT.GETELEMENTBYID
    // assign this to a variable
let display = document.getElementById('display');

// create a variable for the previous result
    // assign it the boolean value FALSE
let previousResult = false;

// call the LISTEN function
listenForButtonPress()

// create a LISTEN function that listens for which button is pressed on the calculator
    // use DOCUMENT.ADDEVENTLISTENER to listen for clicks and select the value of the button pressed
function listenForButtonPress() {
    document.addEventListener('click', getButtonValue);
}

// create a function that returns the value of the button clicked
function getButtonValue() {
    // create variable to store value of button clicked
    let buttonValue = event.target.value;
    // write check that assesses whether the value is a number (IF statement)
    if (buttonValue.isNan === false) {
        // run function NUMBER on the value if check passes
        number(buttonValue);
        return;
    }
    // write statement that runs ALLCLEAR function if the button is AC
    else if (buttonValue === 'AC') {
        allClear();
    }
    // write statement that runs CLEAR function if the button is CE
    else if (buttonValue === 'CE') {
        clear()
    }
    // write statement that runs CALCULATE FUNCTION if the button is equals sign
    else if (buttonValue === '=') {
        calculate();
    }
    // write statement that runs STORENUMBER function if the value is none of the above
    else {
        storeNumber(buttonValue);
    }
}
// create function for button values that are numbers
    // make function take the button values as its argument
    function number(buttonValue) {
        // create IF statement
        if (buttonValue === '.' &&  displayString.includes('.')) {
            // exit the function if the buttonValue is a decimal and the display string includes a decimal
            return;
        } 
        // ELSE IF, 
        else if
            // exit the function if the button value is 0, the first character in the string is 0 - what is happening here???
            // and the string is one character long
            (numString.charAt(0) === '0' && numString.length === 1 && button === '0') {
                return;
            }
        // ELSE
        else {
            // create IF statement
            // check previousresult = true
            if (previousResult = true) {             
                    // make number string empty
                    displayString = '';
                    // make previous result false
                    previousResult = false;
                // add the button variable to the number string
                // make the display's value equal the number string
                display = displayString.push(buttonValue)
            }
        }
    }

// create function that clears everything
   // make number string empty
    // make number array empty
    // make the display's value equal 0
function allClear() {
    displayString = '';
    numberArray = [];
    display.value = 0;

}

// create function to clear
function clear() {
    // make number string empty
    displayString = '';
    // make diplay's value equal 0
    display.value = 0;
}
// create function to store a number
function storeNumber(buttonValue) {
    // make function take the button variable as an argument
        // create check that exits the function if the string is empty and the number array has a length of zero
        if (displayString = '' && numberArray.length === 0) {
            return;
        }
        // ELSE IF
        else if 
            // the string is empty, make the array's length equal its length
            (displayString = '') {
                numberArray.length = numberArray.length -1;
                numberArray.push(buttonValue);
            }
            // push the button value into the array
        // ELSE,
        else {
            // PUSH the number string onto the array
            numberArray.push(displayString);
            // push the button value onto the array
            numberArray.push(buttonValue);
            // make the number string empty again.
            displayString = '';
        }
}
// create function that calculates the result of the values
function calculate() {
    // push the number string onto the number array
    numberArray.push(displayString);
    // make a variable that converts the value the loop is on into a number
    let currentNumber = Number(numberArray[0]);
    // create a for loop that iterates through the array, incrementing by one
    for (i = 0; i < numberArray.length; i++) {
        // make a variable that converts the next value of the loop into a number
        let nextNumber = Number(numberArray[i + 1]);
        // create another variable for operators, let it equal an iteration in the array
        let symbol = numberArray[i];
        // IF the symbol is +
        if (symbol === '+') {
            // add the variable the loop is on and the next variable together
            currentNumber + nextNumber;
        }
        // ELSE IF the symbol is -
        else if (symbol === '-') {
            // minus the variable the loop is on and the next variable together
            currentNumber - nextNumber;
        }
        // ELSE IF the symbol is *
        else if (symbol === '*') {
            // multiply the variable the loop is on and the next variable together
            currentNumber * nextNumber;
        }
        // ELSE IF the symbol is /
        else if (symbol === '/') {
            // divide the variable the loop is on by the next variable together
            currentNumber / nextNumber;
        }
    }
        // IF the number the loop is on is less than zero
        if (currentNumber < 0) {
            // use the Math.abs() method of the number and add a - sign
            currentNumber = Math.abs(currentNumber) + '-';
        }  
        // make the display's value equal the current number
        display.value = currentNumber;
        // convert the number string back into a string using JSON.stringify
        numString = JSON.stringify(currentNumber);
        // make the previousresult equal true
        isPreviousResult = true
        // make the number array an empty array
        numArray = []

}


