const addTaskButton = document.querySelector("#tasks__add");
const tasksList = document.querySelector("#tasks__list");
const input = document.querySelector("#task__input");

const createTask = (goal) => {
  const task = document.createElement("div");
  task.classList.add("task");
  const tittle = document.createElement("div");
  tittle.classList.add("task__title");
  tittle.textContent = goal;
  const removeButton = document.createElement("a");
  removeButton.href = "#";
  removeButton.classList.add("task__remove");
  removeButton.innerHTML = "&times";
  removeButton.addEventListener("click", (event) => {
    event.preventDefault();
    task.remove();
  });
  task.append(tittle, removeButton);
  return task;
}

addTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value.trim()) {
    tasksList.insertAdjacentElement("beforeend", createTask(input.value.trim()));
    input.value = "";
  }
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && input.value.trim()) {
    tasksList.insertAdjacentElement("beforeend", createTask(input.value.trim()));
    input.value = "";
  }
});