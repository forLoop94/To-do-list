const form = document.querySelector('form');
const input = document.querySelector('.placeholder');

const addNewTask = (arr, item) => {
  function Task(item){
    this.item = item;
    this.completed = false;
    this.index = arr.length;
  }
  const task = new Task(item);
  arr.push(task);
  // arr = arr.concat(task);
  localStorage.setItem('task', JSON.stringify(arr));
}


export { addNewTask, form, input };