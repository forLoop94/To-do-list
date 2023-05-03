
import './styles.css';
import { addNewTask, form, input } from './addNewTask';

const placeholder = document.querySelector('ul');

const simpleTodoTasks = [];

form.addEventListener('submit', () => {
  addNewTask(simpleTodoTasks, input.value);
  console.log(simpleTodoTasks);
})

const populateEachTask = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const taskDetails = arr[i];
    const taskContainer = document.createElement('li');
    taskContainer.className = 'task-container';
    taskContainer.innerHTML = `<span class='task-content'><input type='checkbox'></span><span class='task-content'>${taskDetails.description}</span><span class='task-content index'><i class='fa fa-ellipsis-v'></i></span>`;
    placeholder.appendChild(taskContainer);
  }
  return placeholder;
};

populateEachTask(simpleTodoTasks);
