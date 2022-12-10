  document.addEventListener("DOMContentLoaded",() => {

  const taskWrapper = document.querySelector("#tasks");
  const inputTask = document.querySelector("#new-task-description");

  const submitButton = document.querySelector("input[type=\"submit]")
  const form = document.querySelector('#create-task-form')

  const validInput = (input) => {
    input = input.trim();
    return input ? input : false;
  };
  const addNewTask = (e) => {
    e.preventDefault();
    getNewTask();
  };

  const getNewTask = () => {
    let task = inputTask.value;
    if (validInput(task)) {
      buildNewTask(task);
    }
  };

  const buildNewTask = (taskContent) => {
    let task = document.createElement("li");
    task.textContent = taskContent;
    taskWrapper.appendChild(task);
    form.reset();
  };

  form.addEventListener("submit", addNewTask);
});

