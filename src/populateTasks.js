import simpleTodoTasks from "./index";
console.log(simpleTodoTasks)
import removeTask from "./removeTask";

const placeholder = document.querySelector('ul');

const populateEachTask = (arr) => {
  placeholder.textContent = '';
  for (let i = 0; i < arr.length; i += 1) {
    const taskDetails = arr[i];
    const taskContainer = document.createElement('li');
    taskContainer.className = 'task-container';
    taskContainer.innerHTML = `<span class='task-content'><input type='checkbox'></span><span class='task-content'>${taskDetails.item}</span><span class='task-content index'><button class='remove' data-remove>X</button><i class='fa fa-ellipsis-v'></i></span>`;
    placeholder.appendChild(taskContainer);
    const removeBtn = document.querySelector('[data-remove]');
    console.log(removeBtn);
    removeBtn.addEventListener('click', () => {
      removeTask(simpleTodoTasks, i);
      console.log(simpleTodoTasks);
    })
  }
  return placeholder;
};

export default populateEachTask;