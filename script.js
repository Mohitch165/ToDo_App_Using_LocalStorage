document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const submitTaskBtn = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task) => renderTask(task));

    submitTaskBtn.addEventListener('click', () => {  //Event to grab task from the input, create an object with data and push it to our local variable
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

    function renderTask(task) {  // function to display our tasks on the webpage
        const li = document.createElement('li');
        li.setAttribute("data-id", task.id);
        if(task.isCompleted) li.classList.add('completed'); // Adds CSS property of strike-through
        li.innerHTML = 
        `<span>${task.task}</span>
        <button>delete</delete>`; // Grabs task content and adds it to the li
        li.addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON') return;
            task.isCompleted = !task.isCompleted
            li.classList.toggle('completed')
            saveTasks()
        })
        todoList.appendChild(li);
    }

    function saveTasks() { //function to save our tasks to local storage on the browser
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }

});