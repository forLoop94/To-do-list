const todoTasks = [];

const addTask = (item) => {
  todoTasks.push(item);
  return todoTasks;
};

const removeTask = (item) => {
  const remainingTasks = todoTasks.filter(task => task.id !== item.id);
  remainingTasks.forEach((task, key) => { task.id = key + 1; });
  return remainingTasks;
}

export { addTask, removeTask };