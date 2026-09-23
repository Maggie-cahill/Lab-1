// Comment to Martin: I know I was meant to strictly write a sentence or two on each exercise, not necessarily for each line. However, if it is possible, I would prefer to submit assignments in this format with the outlined purpose of each line. With this format, I have to review almost every line and understand the purpose of each function or piece of code. For my learning, I remember and retain the information more effectively with this precise labelling. Although, if you prefer, I can incorporate this information into one paragraph instead; just let me know if you have any objections to the commenting format below, and I will ensure to adapt my work as instructed.


// exercise a
let tasks = ["dishes", "laundry", "homework"]; // setup of the array of strings (list of tasks) to be used later in the functions below


// exercise b
let addTask = (addedTask) => { // function which passes a value and adds this value to the array/list of tasks
    tasks.push(addedTask); // add the passed value to the array
    console.log("You have added '" + addedTask + "' to your list!") // printed message which notifies the user about the insertion of the new item/task
    return tasks.length; // return the total number of values/tasks in your array/list
}

console.log(addTask("make dinner")); // execute the function with the passed value and print it to the console


// exercise c
let listAllTasks = () => { // function which lists/prints all items in the array to the console (DOES NOT PASS ANY VALUES)
    tasks.forEach(element => { // sort through all items in the array and perform the action below
        console.log(element) // print the individual array item to the console
    });
}

listAllTasks(); // execute the listAllTasks function which should print all array items to the console


// exercise d
let deleteTask = (removedTask) => { // function setup to allow the user to pass a value to the function and remove that value (if it exists) from the array list (delete a task from the list)
    let index = tasks.indexOf(removedTask); // identify and assign the index number of the passed value from the array to a variable (-1 if it is not found in the array)

    if(index > -1) { // check to see if the passed value actually exists in the array
        tasks.splice(index, 1); // find the index number and delete this one item (delete the passed value)
        console.log("You have removed an item from your list!"); // print a message notifying the user an item has been removed
        
    }else {
        console.log("This item does not exist in your list.") // print a message indicating the passed value does not exist in the array
    }

    return tasks.length; // return the length of the array (number of tasks in the list)   

}

deleteTask("dishes"); // execute the function and remove the passed value 'dishes' from the array if it exists
