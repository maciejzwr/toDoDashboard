const todoInput = document.querySelector(".todo-input");
const alertInfo = document.querySelector(".alert-info");
const addBtn = document.querySelector(".add-btn");
const ulList = document.querySelector(".todo-list ul");

let idNumber = 0;
const taskArray = [];

const addTask = () => {
  const html = `<li id="${idNumber}">${todoInput.value} <div class="tools">
<button class="delete" onclick="deleteTask(${idNumber})"><i class="fas fa-times"></i></button>
</div>
</li>`;
  taskArray.push(html);
  idNumber++;
  ulList.innerHTML = taskArray;
};

const deleteTask = (idNumber) => {
  const taskToDelete = document.getElementById(idNumber);
  const index = taskArray.indexOf(taskToDelete);
  ulList.removeChild(taskToDelete);
  taskArray.splice(index, 1);
  if (taskArray.length > 0) {
    alertInfo.innerText = "Zadania: ";
  } else {
    alertInfo.innerText = "Brak zadań na liście.";
  }
};

addBtn.addEventListener("click", () => {
  if (todoInput.value !== "") {
    addTask();
    alertInfo.innerText = "Zadania: ";
    todoInput.value = "";
  } else {
    alertInfo.innerText = "Musisz wpisać treść zadania";
  }
});
