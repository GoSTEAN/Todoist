const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const adder = document.getElementById("adder");
const checked = document.querySelector(".checked");

adder.addEventListener("click", adderBut);

let itemId = 1;

window.addEventListener("load", () => {
  const savedItems = JSON.parse(localStorage.getItem("todoItems")) || [];
  savedItems.forEach(item => createItem(item.task, item.completed))
})

function updateStorage() {
  const todoItems = Array.from(todoList.children).map((li, index) => {
    return {
      id: index + 1,
      task: li.textContent.replace(),
      completed: li.classList.contains('checked'),
    };
  });

  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

todoList.addEventListener("click", function doneTask(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    updateStorage();
    const span = e.target.querySelector('span');
    let inputList = todoInput.value.trim();

    if (span) {
      span.remove();
    } else {
        e.target.insertAdjacentHTML(
          "beforeend",
          `<span class="close">${inputList}\u00D7</span>`
        );
    }
  } else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    updateStorage();
  }
});


function adderBut() {
  let inputList = todoInput.value;

  if (inputList === '') {
    alert('You must add something!')
  } else {
    createItem(inputList);
    updateStorage();
  }

  todoInput.value = '';
}

function createItem(task, completed) {
  const todoItem = {
    id: itemId++,
    task: task,
    completed: completed,
  };


  const li = document.createElement('li')
  li.textContent = task;

  const span = document.createElement('span');
  span.innerHTML = "\u00d7";

  todoItem.li = li;
  todoItem.span = span;

  todoList.appendChild(li);
  li.appendChild(span);

}
