/* eslint-disable no-use-before-define */
import './styles.css';
import { addNewTask, form, input } from './addNewTask.js';
import removeTask from './removeTask.js';

const placeholder = document.querySelector('ul');

const simpleTodoTasks = JSON.parse(localStorage.getItem('task')) || [];

const populateEachTask = (arr) => {
  localStorage.setItem('task', JSON.stringify(arr));
  placeholder.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const taskDetails = arr[i];
    const taskContainer = document.createElement('li');
    taskContainer.setAttribute('data-id', i);
    taskContainer.className = 'task-container';
    taskContainer.innerHTML = `<input class='task-content' type='checkbox' data-check><span class='task-content description'>${taskDetails.item}</span>
    <input class='edit hide'>
    <span class='task-content index'></span>`;

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
  }
};

form.addEventListener('submit', () => {
  addNewTask(simpleTodoTasks, input.value);
  populateEachTask(simpleTodoTasks);
  input.value = '';
});

const removeList = (e) => {
  const li = e.target.closest('li');
  const id = li.getAttribute('data-id');
  removeTask(simpleTodoTasks, id);
  simpleTodoTasks.forEach((obj, id) => { obj.index = id + 1; });
  populateEachTask(simpleTodoTasks);
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
      populateEachTask(simpleTodoTasks);
    }
  });
};

populateEachTask(simpleTodoTasks);
