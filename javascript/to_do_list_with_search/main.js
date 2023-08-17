
const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
const inputSearch = document.querySelector('.search');

const renderList = () => {
 ul.textContent = "";
 toDoList.forEach((toDoElement, key) => {
 toDoElement.dataset.key = key;
 ul.appendChild(toDoElement);
})
}

const searchTask = (e) => {
 const searchText = e.target.value.toLowerCase()
 let tasks = [...listItems];
 tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
 if (tasks.length !== 0 && searchText !== "") {
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li))
 } else {
  renderList();
 }
}

const removeTask = (e) => {
 e.target.parentNode.remove();
 const index = e.target.parentNode.dataset.key;
 toDoList.splice(index, 1)
 taskNumber.textContent = listItems.length;
 renderList();
}

const addTask = (e) => {
 e.preventDefault()
 const titleTask = input.value;
 if (titleTask === "") return;
 const task = document.createElement('li');
 task.className = 'task';
 task.innerHTML = titleTask + "<button>Usuń</button>";
 toDoList.push(task)
 renderList()

 ul.appendChild(task);
 input.value = "";
 taskNumber.textContent = listItems.length;
 task.querySelector('button').addEventListener('click', removeTask);

}

form.addEventListener('submit', addTask);
inputSearch.addEventListener('input', searchTask);