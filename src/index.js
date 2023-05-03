
import './styles.css';
import { addNewTask, form, input } from './addNewTask';
import removeTask from './removeTask';
// import populateEachTask from './populateTasks';

const placeholder = document.querySelector('ul');

const simpleTodoTasks = [];

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
    taskContainer.innerHTML = `<span class='task-content'><input type='checkbox'></span><span class='task-content'>${taskDetails.item}</span><span class='task-content index'><i class='fa fa-ellipsis-v'></i></span>`;

    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = `<i class='fa fa-trash'></i>`;
    removeBtn.addEventListener('click', () => {
      removeTask(simpleTodoTasks, i);
      populateEachTask(simpleTodoTasks);
    })
    taskContainer.appendChild(removeBtn);
    placeholder.appendChild(taskContainer);
  }
};

populateEachTask(simpleTodoTasks);

export default simpleTodoTasks;