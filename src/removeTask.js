import saveToLocal from "./saveToLocal";

const removeTask = (arr, index) => {
  arr.splice(index, 1);
  saveToLocal(arr);
};

export default removeTask;