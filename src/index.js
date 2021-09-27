import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import createEle from './helpers/createEle.js';
import createTaskArea from './helpers/createTaskArea.js';

const tasks = [
  {
    description: 'task 1',
    completed: false,
    index: 0
  },
  {
    description: 'task 2',
    completed: false,
    index: 1
  },
  {
    description: 'task 3',
    completed: false,
    index: 2
  },
]

const displayTasks = () => {
  const mainArea = createTaskArea();
  const list = createEle('ul', 'todos', 'list-todos', null);
  tasks.forEach((task) => {
    const row = createEle('li', null, `task-${task.index}`, null);
    const label = createEle('label', null, null, task.description);
    const input = createEle('input', null, task.index, null);
    const dots = createEle('i', 'fas fa-ellipsis-v', `dot-${task.index}`, null);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('value', task.description);
    label.htmlFor = `${task.index}`;
    row.appendChild(label);
    row.appendChild(input);
    row.appendChild(dots);
    list.appendChild(row);
  });
  mainArea.appendChild(list);
  return mainArea;
};

displayTasks();