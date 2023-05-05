const form = document.querySelector('form');
const input = document.querySelector('.placeholder');

const addNewTask = (arr, item) => {
  function Task(item) {
    this.item = item;
    this.completed = false;
    this.index = arr.length + 1;
  }
  const task = new Task(item);
  arr.push(task);
  localStorage.setItem('task', JSON.stringify(arr));
};

export { addNewTask, form, input };