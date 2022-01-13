var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// the module has you create this function. It's the same function as the one I created.
var createTaskHandler = function() {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);

// this function is called by the button's event listener method on clicking.
// same response as createTaskHandler() given in Module 4
/* function addTaskItem() {
    var listItemEl = document.createElement("li");
    listItemEl.textContent = "This is a new task!";
    listItemEl.className = "task-item";
    // now finally add the task item to the ul element in the html file
    tasksToDoEl.appendChild(listItemEl);
}; */

