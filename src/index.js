/* eslint-disable no-use-before-define */
import './styles.css';
import { addNewTask, form, input } from './addNewTask.js';
import removeTask from './removeTask.js';
import clearCompleted from './clearCompleted.js';

const placeholder = document.querySelector('ul');
const clearAllCompleted = document.querySelector('[data-clear]');

const simpleTodoTasks = JSON.parse(localStorage.getItem('task')) || [];

const populateEachTask = (arr) => {
  localStorage.setItem('task', JSON.stringify(arr));
  placeholder.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const taskDetails = arr[i];
    const taskContainer = document.createElement('li');
    taskContainer.setAttribute('data-id', i);
    taskContainer.className = 'task-container';
    taskContainer.innerHTML = `<input class='task-content' id='check-${i}' type='checkbox' ${taskDetails.completed ? 'checked' : '' }data-check><span class='task-content description'>${taskDetails.item}</span>
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
  
    checkbox.nextSibling.classList.toggle('strike', checkbox.checked);
    
    // checkbox.nextSibling.classList.add('strike');

   
    console.log(i, (checkbox.checked))

  }
};

form.addEventListener('submit', () => {
  addNewTask(simpleTodoTasks, input.value);
  populateEachTask(simpleTodoTasks);
  input.value = '';
});

const toogle = (element) => {
  if (element.checked === true) {
    element.checked = false;
  } else if (element.checked === false) {
    element.checked = true;
  }
}

const change = (e) => {
  
   const li = e.target.closest('li');
   const id = li.getAttribute('data-id');
   const checkbox = e.target;
  console.log(id, checkbox.checked)
  
  // if(checkbox.checked) {
  //   console.log('if ',checkbox.checked);

  //   simpleTodoTasks[id].completed = true;
  //   populateEachTask(simpleTodoTasks);
  // } else {
  //   console.log('else',checkbox.checked);

  //   simpleTodoTasks[id].completed = false;
  //   populateEachTask(simpleTodoTasks);
  //}
  // localStorage.setItem('task', JSON.stringify(simpleTodoTasks));
}

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

clearAllCompleted.addEventListener('click', () => {
  clearCompleted(simpleTodoTasks);
  populateEachTask(simpleTodoTasks);
})

populateEachTask(simpleTodoTasks);
