import createEle from './createEle.js';

const createTaskArea = () => {
  const taskArea = document.getElementById('main');
  const header = createEle('div', null, 'header-ele', 'Today\'s todos');
  const add = createEle('div', null, 'add-new', null);
  const addNewTodo = createEle('input', null, 'to-add', null, null);
  const newBtn = createEle('i', 'fas fa-sync', 'add', null);
  addNewTodo.setAttribute('type', 'text');
  addNewTodo.setAttribute('placeholder', 'Add to your list');
  newBtn.setAttribute('type', 'submit');
  add.appendChild(addNewTodo);
  add.appendChild(newBtn);
  taskArea.appendChild(header);
  taskArea.appendChild(add);
  return taskArea;
};

export default createTaskArea;