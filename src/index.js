
import './styles.css';
import { addNewTask, form, input } from './addNewTask';
import removeTask from './removeTask';
import editTask from './editTask';
// import populateEachTask from './populateTasks';

const placeholder = document.querySelector('ul');

let simpleTodoTasks = [];

const task = localStorage.getItem('task');
const allTasks = JSON.parse(task);
if (task) {
  simpleTodoTasks = allTasks;
}

form.addEventListener('submit', () => {
  addNewTask(simpleTodoTasks, input.value);
  populateEachTask(simpleTodoTasks);
  console.log(simpleTodoTasks)
})

const populateEachTask = (arr) => {
  placeholder.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const taskDetails = arr[i];
    const taskContainer = document.createElement('li');
    taskContainer.className = 'task-container';
    taskContainer.innerHTML = `<span class='task-content'><input type='checkbox'></span><span class='task-content description'>${taskDetails.item}</span>
    <span class='edit hide'>${taskDetails.item}</span>
    <span class='task-content index'><i class='fa fa-ellipsis-v'></i></span>`;

    const taskDescription = document.querySelectorAll('.description');

    const editBtn = document.createElement('i');
    editBtn.className = 'fa';
    editBtn.classList.add('fa-pencil');
    taskContainer.appendChild(editBtn);

    const removeBtn = document.createElement('i');
    removeBtn.className = 'fa';
    removeBtn.classList.add('fa-trash');
    removeBtn.addEventListener('click', () => {
      removeTask(simpleTodoTasks, i);
      populateEachTask(simpleTodoTasks);
    })
    taskContainer.appendChild(removeBtn);
    placeholder.appendChild(taskContainer);
  }
};

editBtn.addEventListener('click', () => {
  for (let j = 0; j <= taskDescription.length; j += 1) {
    console.log('cliked j')
    if (j === i) {
      console.log('cliked j')
      // taskDescription.contentEditable = true;
      // taskDescription.style.backgroundColor = 'red'
    }
  }
  // editTask(simpleTodoTasks, taskDescription);
  // populateEachTask(simpleTodoTasks);
})

populateEachTask(simpleTodoTasks);

export default simpleTodoTasks;