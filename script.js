document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
const submitTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach((task) => renderTask(task));

submitTaskBtn.addEventListener('click', () => {
    const inputText = todoInput.value.trim()
    if (inputText == "") return;

    const newTask = {
        id: Date.now(),
        task: inputText,
        isCompleted: false
    }
    tasks.push(newTask);
    saveTasks();
    todoInput.value = "" //Clear Input
});

function renderTask(task) {
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

});