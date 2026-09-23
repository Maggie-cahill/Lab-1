// Comment to Martin: I know I was meant to strictly write a sentence or two on each exercise, not necessarily for each line. However, if it is possible, I would prefer to submit assignments in this format with the outlined purpose of each line. With this format, I have to review almost every line and understand the purpose of each function or piece of code. For my learning, I remember and retain the information more effectively with this precise labelling. Although, if you prefer, I can incorporate this information into one paragraph instead; just let me know if you have any objections to the commenting format below, and I will ensure to adapt my work as instructed.

// Exercise a
let message = () => { // arrow function that does not pass in values, it simply prints the below statement
    console.log("Data Representation & Querying"); // Prints the statement to the console
}

message(); // execute the arrow message function above

//Exercise b
let name = (n) => { // arrow function that passes in a value (I labelled it as name as if I was asking the user for a name)
    console.log(n); // print the passed value to the console log
}

name("Maggie"); // execute the function to print out the passed value


//Exercise c
let add = (firstValue, secondValue) => { // arrow function which passes in two values and adds them together
    return firstValue + secondValue; // add the passed values together and return the value when executed with the two variables (passed values)
}

console.log(add(5, 4)); // print the result of the add function with the passed values 5 and 4 included 


//Exercise d
    let ages = [25, 31, 42, 77]; // array set up with the list of ages

    let multiplyAgeIf = ages.map( 
        (age) => { // multiply function which maps out each individual value of the array and performs the outlined actions below to each value of the array (if the value is below 70, multiply by 2 and return, if not, then leave it the same and return)
            if (age < 70) { // if the array item (age) is below 70, multiply it by two and return it
                return age * 2;
            } else {  // if the array item (age) is not below 70, leave it the same and return it
                return age;
            }
        }
    )
    
    console.log(multiplyAgeIf); // print the result of the executed multiplyAgeIf function 

    



