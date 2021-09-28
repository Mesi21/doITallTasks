import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import createEle from './helpers/createEle.js';
import createTaskArea from './helpers/createTaskArea.js';
import toggleCheck from './helpers/toggleCheck.js';

class ToDo {
  constructor() {
    this.tasks = [
      {
        description: 'task1',
        completed: false,
        index: 0,
      },
      {
        description: 'task2',
        completed: false,
        index: 1,
      },
      {
        description: 'task3',
        completed: false,
        index: 2,
      },
      {
        description: 'task4',
        completed: false,
        index: 3,
      },
    ];
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
    clearAllFinished.setAttribute('id', 'clear');
    mainArea.appendChild(list);
    mainArea.appendChild(clearAllFinished);
    return mainArea;
  }
}

const todo = new ToDo();
todo.displayTasks();