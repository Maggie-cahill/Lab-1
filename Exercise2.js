// Exercise a
let message = () => { // arrow function which does not pass in values, it simply prints the below statement
    console.log("Data Representation & Querying"); // Prints the statement to the console
}

message(); // execute the arrow function

//Exercise b
let name = (n) => { // arrow function that passes in a value
    console.log(n); // print the passed value to the console log
}

name("Maggie"); // execute the function to print out the passed value


//Exercise c
let add = (firstValue, secondValue) => { // arrow function which passes in two values 
    return firstValue + secondValue;
}

console.log(add(5, 4));


//Exercise d
    let ages = [25, 31, 42, 77];

    let multiplyAgeIf = ages.map( // apply a function to each value of the array
        (age) => {
            if (age < 70) { // if the age is below 70, multiply it by two
                return age * 2;
            } else {  // if it is not below 70, leave it the same
                return age;
            }
        }
    )
    
    console.log(multiplyAgeIf); // print all values from the array after it has been passed through the function

    



