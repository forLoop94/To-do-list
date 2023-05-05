/* eslint-disable no-use-before-define */
import './styles.css';
import { addNewTask, form, input } from './addNewTask.js';
import removeTask from './removeTask.js';
import clearCompleted from './clearCompleted.js';

const placeholder = document.querySelector('ul');
const clearAllCompleted = document.querySelector('[data-clear]');

const simpleTodoTasks = JSON.parse(localStorage.getItem('task')) || [];

const render = (arr) => {
  localStorage.setItem('task', JSON.stringify(arr));
  placeholder.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const taskDetails = arr[i];
    const taskContainer = document.createElement('li');
    taskContainer.setAttribute('data-id', i);
    taskContainer.className = 'task-container';
    taskContainer.innerHTML = `<input class='task-content' id='check-${i}' type='checkbox' data-check><span class='task-content description'>${taskDetails.item}</span>
    <input class='edit hide' value=${taskDetails.item}>
    <span class='task-content index'></i></span>`;

    const editBtn = document.createElement('i');
    editBtn.className = 'fa';
    editBtn.classList.add('fa-pencil');
    taskContainer.appendChild(editBtn);

    const removeBtn = document.createElement('i');
    removeBtn.className = 'fa';
    removeBtn.classList.add('fa-trash');
    removeBtn.addEventListener('click', removeList);

    taskContainer.appendChild(removeBtn);
    placeholder.appendChild(taskContainer);

    editBtn.addEventListener('click', editDescription);

    const checkbox = document.getElementById('check-'+i)
    
    checkbox.addEventListener('change', change)
    if(taskDetails.completed){
      checkbox.nextSibling.classList.add('strike');
      checkbox.setAttribute('checked', '')
    }
  }
};


form.addEventListener('submit', () => {
  addNewTask(simpleTodoTasks, input.value);
  render(simpleTodoTasks);
  input.value = '';
});

const change = (e) => {
   const li = e.target.closest('li');
   const id = li.getAttribute('data-id');
   const checkbox = e.target;
  console.log(id, checkbox.checked)
  
  if(checkbox.checked) {
    checkbox.nextSibling.classList.toggle('strike', true);
    simpleTodoTasks[id].completed = true;
  } else {
    checkbox.nextSibling.classList.toggle('strike', false);
    simpleTodoTasks[id].completed = false;
  }
  localStorage.setItem('task', JSON.stringify(simpleTodoTasks));
}

const removeList = (e) => {
  const li = e.target.closest('li');
  const id = li.getAttribute('data-id');
  removeTask(simpleTodoTasks, id);
  simpleTodoTasks.forEach((obj, id) => { obj.index = id + 1; });
  render(simpleTodoTasks);
};

const editDescription = (e) => {
  const li = e.target.closest('li');
  li.style.backgroundColor = 'rgb(246, 204, 204)';
  const id = li.getAttribute('data-id');
  const description = li.children[1];
  const input = li.children[2];
  input.value = description.textContent;
  const closeTask = li.children[5];
  e.target.style.display = 'none';
  closeTask.style.marginRight = '1rem';
  description.style.display = 'none';
  input.classList.toggle('hide', false);
  input.focus();
  input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      simpleTodoTasks[id].item = input.value;
      render(simpleTodoTasks);
    }
  });
};

clearAllCompleted.addEventListener('click', () => {
  const cleared = clearCompleted(simpleTodoTasks);
  localStorage.setItem('task', JSON.stringify(cleared));
  render(cleared);
})

render(simpleTodoTasks);
