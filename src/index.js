import './styles.css';

const placeholder = document.querySelector('ul');


const simpleTodoTasks = [
  {
    description: '',
    completed: true,
    index: 0
  },
  {
    description: '',
    completed: true,
    index: 0
  },
  {
    description: '',
    completed: true,
    index: 0
  },
  {
    description: '',
    completed: true,
    index: 0
  }
];

const populateEachTask = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const taskDetails = arr[i];
    const taskContainer = document.createElement('li');
    taskContainer.className = 'task-container';
    taskContainer.innerHTML = `<span class='task-content'>${taskDetails.description}</span><span class='task-content'>${taskDetails.completed}</span><span class='task-content'>index:${i}</span>`;
    placeholder.appendChild(taskContainer);
  }
  return placeholder;
}

populateEachTask(simpleTodoTasks);


