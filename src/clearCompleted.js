import saveToLocal from './saveToLocal.js';

const clearCompleted = (arr) => {
  const filterArr = arr.filter((obj) => obj.completed === false);
  saveToLocal(filterArr);
};

export default clearCompleted;