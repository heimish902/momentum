const toDoForm = document.querySelector('.todo_form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo_list');

let toDos = [];
const TODOS_KEY = 'todos';

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const list = e.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id));
  list.remove();
  saveToDos();

  if (toDos == '') {
    toDoList.classList.add(HIDE_CLASSNAME);
  }
}

function doneTodo(e) {
  if (e.target.className == '') {
    e.target.classList.add('done');
  } else {
    e.target.classList.remove('done');
  }
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  span.addEventListener('click', doneTodo);

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.classList.remove(HIDE_CLASSNAME);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value; // 값 저장
  toDoInput.value = '';
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
