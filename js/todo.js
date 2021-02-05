const todoInput = document.querySelector(".todo-input");
const alertInfo = document.querySelector(".alert-info");
const addBtn = document.querySelector(".add-btn");
const ulList = document.querySelector(".todo-list ul");
const popup = document.querySelector(".popup");
const popupInfo = document.querySelector(".popup-info");
const popupInput = document.querySelector(".popup-input");
const addPopupBtn = document.querySelector(".accept");
const closeTodoBtn = document.querySelector(".cancel");

let idNumber = 0;
const taskArray = [];

const addTask = () => {
  const html = `<li id="${idNumber}">${todoInput.value} <div class="tools">
<button class="edit" onclick="editTask(${idNumber})">EDIT</button><button class="delete" onclick="deleteTask(${idNumber})"><i class="fas fa-times"></i></button>
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

const editTask = (idNumber) => {
  popup.style.display = "flex";
  const taskToChange = document.getElementById(idNumber);
  addPopupBtn.addEventListener("click", () => {
    if (popupInput.value !== "") {
      taskToChange.childNodes[0].textContent = popupInput.value;
      popup.style.display = "none";
      popupInfo.innerText = "";
    } else {
      popupInfo.innerText = "Musisz wpisać nową nazwę zadania";
    }
  });
  closeTodoBtn.addEventListener("click", () => {
    popup.style.display = "none";
    console.log("cancel");
  });
};

const completedTask = (idNumber) => {
  const completed = document.getElementById(idNumber);
  completed.classList.toggle("completed");
};
addBtn.addEventListener("click", () => {
  if (todoInput.value !== "") {
    addTask();
    alertInfo.innerText = "Zadania: ";
  } else {
    alertInfo.innerText = "Musisz wpisać treść zadania";
  }
});
