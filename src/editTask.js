const editTask = (arr, c) => {
  c.contentEditable = true;
  localStorage.setItem('task', JSON.stringify(arr));
}

export default editTask;