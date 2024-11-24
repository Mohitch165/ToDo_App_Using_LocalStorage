const todoInput = document.getElementById('todo-input');
const submitTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

let tasks = [];

submitTaskBtn.addEventListener('click', () => {
    const inputText = todoInput.value.trim()
    if (inputText == "") return;

    const newTask = {
        id: Date.now(),
        task: inputText,
        isCompleted: false
    }
    tasks.push(newTask);
    todoInput.value = "" //Clear Input
});
