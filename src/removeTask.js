import saveToLocal from './saveToLocal.js';

const removeTask = (arr, index) => {
  arr.splice(index, 1);
  saveToLocal(arr);
};

export default removeTask;