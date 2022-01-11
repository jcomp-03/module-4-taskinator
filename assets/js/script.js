var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


console.log(buttonEl);

// I can call the addTaskItem() function before it's declared because of how I declare the function,
// as opposed to using a function expression, i.e. var addTaskItem = function () {...};
buttonEl.addEventListener("click", addTaskItem);

// this function is called by the button's event listener method on clicking.
function addTaskItem() {
    var listItemEl = document.createElement("li");
    listItemEl.textContent = "This is a new task!";
    listItemEl.className = "task-item";
    // now finally add the task item to the ul element in the html file
    tasksToDoEl.appendChild(listItemEl);
};

// the module has you create this function. It's the same function as the one I created.
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }