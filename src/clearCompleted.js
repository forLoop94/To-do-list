const clearCompleted = (arr) => {
 return arr.filter(obj => {
    return obj.completed === false;
  });
}

export default clearCompleted;