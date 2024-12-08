const input = document.getElementById('enter-task');
const button = document.querySelector('button');
const todoList = document.getElementById('list-task');

button.addEventListener('click', addTodo);
input.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    addTodo();
  }

});

function addTodo() {
  if (input.value) {
    // create todo
    let newTodo = document.createElement('div');
    newTodo.classList.add('task');

    // user entered text
    let text = document.createElement('p');
    text.innerText = input.value;
    newTodo.appendChild(text);

    // create and add icon containers
    let icons = document.createElement('div');
    icons.classList.add('icons');
    newTodo.appendChild(icons);

    // create and add icons
    let complete = document.createElement('i');
    complete.classList.add('bi', 'bi-check-circle-fill', 'icon-complete');
    complete.addEventListener('click', completedTodo);
    let deleted = document.createElement('i');
    deleted.classList.add('bi', 'bi-trash3-fill', 'icon-deleted');
    deleted.addEventListener('click', deletedTodo);

    icons.append(complete, deleted);

    // add todos to list
    todoList.appendChild(newTodo);

  } else {
    alert('Debe ingresar una tarea.');
  }
  input.value = "";
}

// Mark a todo as completed.
function completedTodo(e) {
  let task = e.target.parentNode.parentNode;
  task.classList.toggle('completed');
}

// Delete a todo from the DOM.
function deletedTodo(e) {
  let task = e.target.parentNode.parentNode;
  task.remove();
}