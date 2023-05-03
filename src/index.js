
import './styles.css';
import { addNewTask, form, input } from './addNewTask';
import removeTask from './removeTask';
import editTask from './editTask';
// import populateEachTask from './populateTasks';

const placeholder = document.querySelector('ul');

let simpleTodoTasks = JSON.parse(localStorage.getItem('task')) || [];

// const task = localStorage.getItem('task');
// const allTasks = JSON.parse(task);
// if (task) {
//   simpleTodoTasks = allTasks;
// }

form.addEventListener('submit', () => {
  addNewTask(simpleTodoTasks, input.value);
  populateEachTask(simpleTodoTasks);
})

const populateEachTask = (arr) => {
  localStorage.setItem('task',JSON.stringify(simpleTodoTasks))
  placeholder.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const taskDetails = arr[i];
    const taskContainer = document.createElement('li');
    taskContainer.setAttribute('data-id', i)
    taskContainer.className = 'task-container';
    taskContainer.innerHTML = `<span class='task-content'><input type='checkbox'></span><span class='task-content description'>${taskDetails.item}</span>
    <input class='edit hide' value=${taskDetails.item}>
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

    editBtn.addEventListener('click', editDecription)
// loop end
  }

};

const editDecription = (e) => {
const li = e.target.closest('li')
const id = li.getAttribute('data-id')
const description = li.children[1]
const input = li.children[2]
//this is edit description
description.style.display = 'none'
//input.classList.remove('hide')
input.classList.toggle('hide', false) //same as removing
input.focus();

input.addEventListener('keyup', (e)=>{
  if(e.key === 'Enter'){
    simpleTodoTasks[id].item = input.value;
    populateEachTask(simpleTodoTasks)  
  } 
})

//console.log('description & input', li, description, input );

  // for (let j = 0; j <= taskDescription.length; j += 1) {
  //   console.log('cliked i',i,'j',j)
  //   if (j === i) {
  //     // taskDescription.contentEditable = true;
  //     // taskDescription.style.backgroundColor = 'red'
  //   }
  // }
  // // editTask(simpleTodoTasks, taskDescription);
  // // populateEachTask(simpleTodoTasks);
}

populateEachTask(simpleTodoTasks);

// const edits = document.querySelectorAll('.fa-pencil')
// console.log('editsss -------',edits)



export default simpleTodoTasks;