var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// the module has you create this function. It's the same function as the one I created.
var createTaskHandler = function() {
    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task, James";
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

