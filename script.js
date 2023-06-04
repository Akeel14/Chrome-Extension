document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", function () {
      taskTextElement.classList.toggle("completed");
    });
    taskItem.appendChild(checkbox);

    const taskTextElement = document.createElement("span");
    taskTextElement.classList.add("taskText");
    taskTextElement.textContent = taskText;
    taskItem.appendChild(taskTextElement);

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });
    taskItem.appendChild(removeButton);

    taskList.appendChild(taskItem);
    taskInput.value = "";
  });

  // Optionally, load tasks from localStorage here.
});
