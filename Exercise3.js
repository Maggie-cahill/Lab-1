// exercise a
let tasks = ["dishes", "laundry", "homework"]; // array of strings

let addTask = (addedTask) => { // function to add a task / string to the array
    tasks.push(addedTask); // add the passed value to the array
    console.log("You have added '" + addedTask + "' to your list!") // notify the user about the insertion 
    return tasks.length; // return the total number of tasks in your list
}

console.log(addTask("make dinner")); // execute the function with the passed value

// exercise b 
let listAllTasks = () => { // function to list all items included in the array
    tasks.forEach(element => { // filter through out items in the array and perform the action below
        console.log(element) // print the individual array item
    });
}

listAllTasks();

// exercise c
let deleteTask = (removedTask) => {
    let index = tasks.indexOf(removedTask);

    if(index > -1) { // check to see if the passed value actually exists in the array
        tasks.splice(index, 1); // remove the passed value (if it exists) from the array
        console.log("You have removed an item from your list!"); // print a message notifying the user an item has been removed
        
    }else {
        console.log("This item does not exist in your list.") // print a message indicating the passed value does not exist in the array
    }

    return tasks.length; // return the length of the array (number of tasks in the list)
    

}


deleteTask("dishes"); // execute te function and remove the passed value 'dishes' from the array if it exists in the array
