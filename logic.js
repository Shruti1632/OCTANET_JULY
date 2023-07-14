const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerText = taskText;

    li.addEventListener("click", toggleTask);

    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function toggleTask() {
  this.classList.toggle("completed");
}

addTaskBtn.addEventListener("click", addTask);