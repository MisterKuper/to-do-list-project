// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// functions 
function addTodo(event) {
    // prevent form from submitting
   event.preventDefault();

    // create DIV
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo);
    
    // CHECK MARK BUTTON
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton)
    
    // CHECK TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)

    // APPEND to list
    todoList.appendChild(todoDiv);

    // CLEAR Todo input value
    todoInput.value = "";

    // Create the eleent and attaching the listener
    newItem.addEventListener("click", deleteItem)
}

function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO
    if(item.classList[0] === "trash-btn") {
        item.remove();
    }
}