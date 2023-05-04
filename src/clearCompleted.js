const clearCompleted = (arr) => {
  arr.filter(obj => {
    console.log(obj.completed === false);
    return obj.completed === false;
  });
}

export default clearCompleted;