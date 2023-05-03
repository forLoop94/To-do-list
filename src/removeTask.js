const removeTask = (arr, index) => {
  arr.splice(index, 1);
  console.log(index)
  localStorage.setItem('task', JSON.stringify(arr));
}

export default removeTask;