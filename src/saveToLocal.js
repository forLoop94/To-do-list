const updateIndex = (arr) => arr.map((obj, key) => {
  obj.index = key + 1;
  return obj;
});

export default (arr) => {
  const updatedArr = updateIndex(arr);
  localStorage.setItem('task', JSON.stringify(updatedArr));
};
