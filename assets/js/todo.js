// assets/js/todo.js
// Persistent storage based stylish todo list

document.addEventListener('DOMContentLoaded', function () {
  const todoBlock = document.getElementById('todoBlock');
  const todoInput = document.getElementById('todoInput');
  const todoAddBtn = document.getElementById('todoAddBtn');
  const todoList = document.getElementById('todoList');

  // Load todos from localStorage
  function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todoList.innerHTML = '';
    todos.forEach((todo, idx) => {
      const li = document.createElement('li');
      li.className = 'todo-item' + (todo.done ? ' done' : '');
      li.innerHTML = `
        <span>${todo.text}</span>
        <button class="todo-done" title="Mark as done">✔</button>
        <button class="todo-delete" title="Delete">✖</button>
      `;
      li.querySelector('.todo-done').onclick = () => toggleDone(idx);
      li.querySelector('.todo-delete').onclick = () => deleteTodo(idx);
      todoList.appendChild(li);
    });
  }

  function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.push({ text, done: false });
    saveTodos(todos);
    todoInput.value = '';
    loadTodos();
  }

  function toggleDone(idx) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos[idx].done = !todos[idx].done;
    saveTodos(todos);
    loadTodos();
  }

  function deleteTodo(idx) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.splice(idx, 1);
    saveTodos(todos);
    loadTodos();
  }

  todoAddBtn.onclick = addTodo;
  todoInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') addTodo();
  });

  loadTodos();
});
