const todoTasks = [{ id: 1, task: 'wash the dishes', status: false }, { id: 2, task: 'complete todo list app', status: false }];
const editTask = (item) => {
  const selectedTodo = todoTasks.find((task) => task.id === item.id);
  selectedTodo.task = item.task;
};

const updateTaskStatus = (id) => {
  const selectedTodo = todoTasks.find((task) => task.id === id);
  selectedTodo.status = true;
  return selectedTodo;
};

const clearTasks = () => {
  const selectedTodo = todoTasks.filter((task) => task.status !== true);
  selectedTodo.forEach((task, id) => {
    task.id = id + 1;
  });
  return selectedTodo;
};

exports.editTask = editTask;
exports.updateTaskStatus = updateTaskStatus;
exports.clearTasks = clearTasks;
