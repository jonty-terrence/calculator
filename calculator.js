// create empty string that will display the input
let displayString = '';


// create a function for when a button is clicked
function clicked(input) {

    // determine whether the argument is a number or not
    // if it is a number, put it in the display
if (isNaN(input) === false) {
    displayString = displayString + String(input);
    document.getElementById("display").innerHTML = displayString;
    // empty the input if user clicks ce or ac button
} else if (input === 'ce' || input === 'ac') { 
    displayString = ''
    document.getElementById("display").innerHTML = displayString;
    // if user clicks them, add plus, minus, multiply, divide signs to display 
} else if (input === '+' || input === '-' || input === '/' || input === '*') {
    displayString = displayString + String(input);
    document.getElementById("display").innerHTML = displayString;
    // if user clicks decimal point, add to display
} else if (input === ".") {
    displayString = displayString + String(input);
    document.getElementById("display").innerHTML = displayString;
}
// if user clicks equals, evaluate the string formed
    else if (input === "=") {
        displayString = eval(displayString);
        document.getElementById("display").innerHTML = displayString;
    }

}

