import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import createEle from './helpers/createEle.js';
import createTaskArea from './helpers/createTaskArea.js';
import toggleCheck from './helpers/toggleCheck.js';
import createTask from './helpers/createTask.js';

class ToDo {
  constructor() {
    this.tasks = [];
  }

  localSave() {
    localStorage.setItem('AllTasks', JSON.stringify(this.tasks));
  }

  checktorageIsEmpty() {
    if (localStorage.getItem('AllTasks') !== null) {
      this.tasks = JSON.parse(localStorage.getItem('AllTasks'));
    }
    return this.task;
  }

  displayTasks() {
    const mainArea = createTaskArea();
    const eleToAdd = document.getElementById('to-add');
    const newTaskToAdd = document.getElementById('add');
    this.checktorageIsEmpty();
    const list = createEle('ul', 'todos', 'list-todos', null);
    const clearAllFinished = createEle('div', null, 'clear', 'Clear all completed');
    this.tasks.forEach((task) => {
      const row = createEle('li', null, `task-${task.index}`, null);
      const label = createEle('label', null, null, task.description);
      const input = createEle('input', null, task.index, null);
      const dots = createEle('i', 'fas fa-ellipsis-v', `dot-${task.index}`, null);
      input.setAttribute('type', 'checkbox');
      input.setAttribute('value', task.description);
      input.checked = task.completed;
      input.addEventListener('change', () => {
        toggleCheck(input, task);
        this.localSave();
      });
      label.htmlFor = `${task.index}`;
      row.appendChild(input);
      row.appendChild(label);
      row.appendChild(dots);
      list.appendChild(row);
      this.localSave();
    });
    newTaskToAdd.addEventListener('click', () => {
      createTask(this.tasks, eleToAdd.value);
      eleToAdd.value = '';
      this.localSave();
      window.location.reload();
    });
    clearAllFinished.setAttribute('id', 'clear');
    mainArea.appendChild(list);
    mainArea.appendChild(clearAllFinished);
    return mainArea;
  }
}

const todo = new ToDo();
todo.displayTasks();