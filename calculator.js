// create a variable for the number being displayed
    // make it equal an empty string

// select the display section of the calculator using DOCUMENT.GETELEMENTBYID
    // assign this to a variable

// create a variable for the previous result
    // assign it the boolean value FALSE

// call the LISTEN function


// create a LISTEN function that listens for which button is pressed on the calculator
    // use DOCUMENT.ADDEVENTLISTENER to listen for clicks and select the value of the button pressed


// create a function that returns the value of the button clicked
    // create variable to store value of button clicked
    // write check that assesses whether the value is a number (IF statement)
        // run function NUMBER on the value if check passes
    // write statement that runs ALLCLEAR function if the button is AC
    // write statement that runs CLEAR function if the button is CE
    // write statement that runs CALCULATE FUNCTION if the button is equals sign
    // write statement that runs STORENUMBER function if the value is none of the above

// create function for button values that are numbers
    // make function take the button values as its argument
        // create IF statement
            // exit the function if the string is empty and the array is only one value long
        // ELSE IF, 
            // exit the function if the button value is 0, the first character in the string is 0 
            // and the string is one character long
        // ELSE
            // create IF statement
                // check previousresult = true
                    // make number string empty
                    // make previous result false
                // add the button variable to the number string
                // make the display's value equal the number string

// create function that clears everything
    // make number string empty
    // make number array empty
    // make the display's value equal 0

// create function to clear
    // make number string empty
    // make diplay's value equal 0

// create function to store a number
    // make function take the button variable as an argument
        // create check that exits the function if the string is empty and the number array has a length of zero
        // ELSE IF
            // the string is empty, make the array's length equal its length
            // push the button value into the array
        // ELSE,
            // PUSH the number string onto the array
            // push the button value onto the array
            // make the number string empty again.

// create function that calculates the result of the values
    // push the number string onto the number array
    // make a variable that converts the value the loop is on into a number
    // make a variable that converts the next value of the loop into a number
    // create a for loop that iterates through the array, incrementing by one
        // create variable, let it equal the iteration converted to a number
        // create another variable for operators, let it equal an iteration in the array
        // IF the symbol is +
            // add the variable the loop is on and the next variable together
        // ELSE IF the symbol is -
            // minus the variable the loop is on and the next variable together
        // ELSE IF the symbol is *
            // multiply the variable the loop is on and the next variable together
        // ELSE IF the symbol is /
            // divide the variable the loop is on by the next variable together
        // IF the number the loop is on is less than zero
            // use the Math.abs() method of the number and add a - sign
        
        // make the display's value equal the current number
        // convert the number string back into a string using JSON.stringify
        // make the previousresult equal true
        // make the number array an empty array

