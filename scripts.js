const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const adder = document.getElementById('adder');
const checked = document.querySelector(".checked");

adder.addEventListener("click", adderBut);
todoList.addEventListener("click", function doneTask(e) {

  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked")
    const span = e.target.querySelector("span");
      const inputList = todoInput.value;

    if (span) {
      span.remove();

    } else {
        e.target.insertAdjacentHTML(
          "beforeend",
          `<span class="close">${inputList}\u00D7</span>`
        );
    }
  } 
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();

  } 
  console.log("done")
}, false)

// Triggers the button to get value from input box
function adderBut() {
  // value from input box
  const inputList = todoInput.value;
  
  if (inputList == '') {
    alert('Add something')
    return;
  } else {
    // calling the Addtask function
    addTask(inputList);
  }
  
  console.log(inputList);

  // clearing the input box
  todoInput.value = '';
}

// Add task as a list 
function addTask(task) {
    const todoItem = document.createElement("li");
    todoItem.textContent = task;
    todoList.appendChild(todoItem);
  
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    todoItem.appendChild(span);
}

function itemStorage() {
  localStorage.setItem({
  id: 1,
  item: "call Bright",
  completed: false
})
}



