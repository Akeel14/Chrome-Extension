const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
let taskArray = getTasksFromLocalStorage();

// Create
function createTask(taskText) {
  return { text: taskText, completed: false };
}

// Read
function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Update
function updateTasksInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(taskArray));
}

// Delete
function deleteTask(index) {
  taskArray.splice(index, 1);
  updateTasksInLocalStorage();
}

function createTaskElement(taskObj) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("taskItem");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.checked = taskObj.completed;
  checkbox.addEventListener("change", function () {
    taskObj.completed = checkbox.checked;
    taskTextElement.classList.toggle("completed", taskObj.completed);
    updateTasksInLocalStorage();
  });

  const taskTextElement = document.createElement("span");
  taskTextElement.classList.add("taskText");
  taskTextElement.textContent = taskObj.text;
  taskTextElement.classList.toggle("completed", taskObj.completed);

  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.textContent = "X";
  removeButton.addEventListener("click", function () {
    deleteTask(taskObj);
    renderTasks();
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(removeButton);

  return taskItem;
}

// Render
function renderTasks() {
  taskList.innerHTML = ""; // Clear the current list of tasks

  for (let i = 0; i < taskArray.length; i++) {
    const taskElement = createTaskElement(taskArray[i]);
    taskList.appendChild(taskElement);
  }
}

addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value;
  if (taskText === "") return;

  const newTask = createTask(taskText);
  taskArray.push(newTask); // Add the new task to the array
  updateTasksInLocalStorage();

  taskInput.value = "";
  renderTasks(); // Re-render the tasks
});

renderTasks(); // Render tasks when the page loads
