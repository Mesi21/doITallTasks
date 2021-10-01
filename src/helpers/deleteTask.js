const deleteTask = (tasksArr, tsk, idx) => {
  const dot = document.getElementById(`dot-${idx}`)
  dot.addEventListener('click', (e) => {
    console.log(e.target)
  })
  tasksArr.filter((tsk) => tsk.id !== tasksArr[idx].id);
};
export default deleteTask;