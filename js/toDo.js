const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

let toDos = [];

function paintToDo (newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
  toDos.push(newToDo);
  saveToDo();
  btn.addEventListener("click", deleteToDo);
};

function saveToDo () {
  localStorage.setItem("toDos", JSON.stringify(toDos));
};

function handleSubmit (event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  paintToDo (newToDoObj);
};

function deleteToDo (event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
};


const saved = JSON.parse(localStorage.getItem("toDos"))
if (saved != null) {
  saved.forEach(paintToDo);
}
toDoForm.addEventListener("submit", handleSubmit);