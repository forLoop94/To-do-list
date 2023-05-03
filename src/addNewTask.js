const form = document.querySelector('form');
const input = document.querySelector('.placeholder');

const addNewTask = (arr, item) => {
  function Task(item){
    this.item = item;
    this.completed = true;
    this.index = 1;
  }

  const task = new Task(item);

  arr.push(task);
}


export { addNewTask, form, input };