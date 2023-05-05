import saveToLocal from "./saveToLocal";

const clearCompleted = (arr) => {
  const filterArr = arr.filter(obj => {
    return obj.completed === false;
  });
  saveToLocal(filterArr);
}

export default clearCompleted;