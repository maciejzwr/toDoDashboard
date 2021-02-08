let newTask;
let idNumber = 0;
let local;
let editedTodo;
let task;
let newLocalTask;
let bool = false;
let completed;
let completedMode = localStorage.getItem("completedMode");

const todoInput = document.querySelector(".todo-input");
const alertInfo = document.querySelector(".alert-info");
const addBtn = document.querySelector(".add-btn");
const ulList = document.querySelector(".todo-list ul");
const allTasks = document.getElementsByTagName("li");
const popup = document.querySelector(".popup");
const popupInfo = document.querySelector(".popup-info");
const popupInput = document.querySelector(".popup-input");
const addPopupBtn = document.querySelector(".accept");
const closeTodoBtn = document.querySelector(".cancel");

let todos = [];

document.addEventListener("DOMContentLoaded", getTodos);

const addNewTask = () => {
  if (todoInput.value !== "") {
    newTask = document.createElement("li");
    newTask.innerText = todoInput.value;
    saveLocalTodos(todoInput.value);
    newTask.setAttribute("id", idNumber);
    ulList.appendChild(newTask);
    todoInput.value = "";
    alertInfo.innerText = "";
    createToolsArea();
    idNumber++;
  } else {
    alertInfo.innerText = "Wpisz treść zadania!";
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  newTask.appendChild(toolsPanel);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerText = "EDIT";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  toolsPanel.appendChild(completeBtn);
  toolsPanel.appendChild(editBtn);
  toolsPanel.appendChild(deleteBtn);
};

const checkClick = (e) => {
  if (e.target.classList.value !== "") {
    if (e.target.closest("button").classList.contains("complete")) {
      // e.target.closest("li").classList.toggle("completed");
      completeTask(e);
    } else if (e.target.closest("button").classList.contains("edit")) {
      editTask(e);
    } else if (e.target.closest("button").classList.contains("delete")) {
      deleteTask(e);
    }
  }
};

const editTask = (e) => {
  const oldTodo = e.target.closest("li").id;

  editedTodo = document.getElementById(oldTodo);
  popupInput.value = editedTodo.firstChild.textContent;

  // let smth = editedTodo.firstChild.textContent;

  task = editedTodo.firstChild.textContent;

  popup.style.display = "flex";
};

const changeTodo = () => {
  if (popupInput.value !== "") {
    editedTodo.firstChild.textContent = popupInput.value;
    console.log(popupInput.value);
    newLocalTask = popupInput.value;
    console.log(newLocalTask);

    popup.style.display = "none";

    changeLocalTodos();
    popupInput.innerText = "";
  } else {
    popupInfo.innerText = "Musisz podać jakąś treść!";
  }
};

const deleteTask = (e) => {
  const todoTask = e.target.closest("li");
  todoTask.remove();

  removeLocalTodos(todoTask);

  if (allTasks.length === 0) {
    alertInfo.innerText = "Brak zadań na liście.";
  }
};

const closePopup = () => {
  popup.style.display = "none";
  popupInfo.innerText = "";
};

addBtn.addEventListener("click", addNewTask);
ulList.addEventListener("click", checkClick);
addPopupBtn.addEventListener("click", changeTodo);
closeTodoBtn.addEventListener("click", closePopup);

function saveLocalTodos(todo) {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);

  console.log(`array  : ${todos}`);

  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todoTask) {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let x = todoTask.childNodes[0];
  let y = todos.indexOf(x.data);

  todos.splice(y, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    newTask = document.createElement("li");

    newTask.innerText = todo;
    newTask.setAttribute("id", idNumber);

    ulList.appendChild(newTask);

    createToolsArea();
    idNumber++;
    if (todos.length > 0) {
      alertInfo.innerText = "";
    }
  });
}

function changeLocalTodos() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let y = todos.indexOf(task);

  todos[y] = newLocalTask;

  localStorage.setItem("todos", JSON.stringify(todos));
}

function completeTask(e) {
  
  completedMode = localStorage.getItem("completedMode");
  const completedTask = e.target.closest("li").id;
  let completed = document.getElementById(completedTask);

  if (completed.classList.contains("completed")) {
    completed.classList.remove("completed");
    localStorage.setItem("completedMode", null);
  } else {
    completed.classList.add("completed");
    localStorage.setItem("completedMode", "enabled");
  }
   
}

 