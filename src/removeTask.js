const removeTask = (arr, index) => {
  arr.splice(index, 1);
  localStorage.setItem('task', JSON.stringify(arr));
};

export default removeTask;