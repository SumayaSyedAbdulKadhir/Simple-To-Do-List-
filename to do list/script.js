let taskList = [];

document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();
    if (task) {
        taskList.push({ text: task, completed: false });
        renderTaskList();
        taskInput.value = '';
    }
}

function renderTaskList() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.text;
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskElement.addEventListener('click', () => {
            task.completed =!task.completed;
            renderTaskList();
        });
        taskListElement.appendChild(taskElement);
    });
}

renderTaskList();