const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const addButton = document.querySelector('#button');
const newItem = document.querySelector('#todo-item');
const deleteButton = document.querySelector('#button2'); 
const titleInput = document.querySelector('#titleInput');
const descriptionInput = document.querySelector('#descriptionInput');
const dueDateInput = document.querySelector('#dueDateInput');

addButton.addEventListener('click', addTask);
deleteButton.addEventListener('click', deleteAllTasks);

function addTask() {
        const titleValue = titleInput.value.trim();
        const descriptionValue = descriptionInput.value.trim();
        const dueDateValue = dueDateInput.value.trim();

    if (titleValue !== "") {
        const timestamp = new Date().toLocaleString();
        const task = {
            title: titleValue,
            description: descriptionValue,
            dueDate: dueDateValue, 
            timestamp: timestamp
        };
        tasks.push(task);
        saveTasksToLocalStorage();
        renderTasks();
        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';

        dueDateInput.focus();
        
    } else {
        alert("Please enter a task!");
    }
}
// An additional function that manipulates the html contents, creates an element, its className, and inserts an innerHTML contents
function renderTasks() {
    newItem.innerHTML = '';
    tasks.slice().reverse().forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>Title:</strong> ${task.title}<br>
        <strong>Description:</strong> ${task.description}<br>
        <strong>Timestamp:</strong> ${task.timestamp}
        <i onclick="delTask(${tasks.length - 1 - index})" class="fa-solid fa-trash"></i>
        <i onclick="updateTask(${tasks.length - 1 - index})" class="fa-solid fa-pen-to-square"></i>`;
      
        // When we append the child we make it possible for us to get an input value 
        newItem.appendChild(li);
    });
}

// deletes only one task at a time
function delTask(index) {
    tasks.splice(index, 1);
    saveTasksToLocalStorage();
    renderTasks();
}
// updates the task given but prompts are not always good for effective user interface
function updateTask(index) {
    const task = tasks[index];
    const newTitle = prompt("Enter new title:", task.title);
    const newDescription = prompt("Enter new description:", task.description);
    if (newTitle !== null && newDescription !== null) {
        task.title = newTitle;
        task.description = newDescription;
        saveTasksToLocalStorage();
        renderTasks();
    }
}

// Deletes all the tasks created
function deleteAllTasks() {
    tasks.splice(0, tasks.length);
    saveTasksToLocalStorage();
    renderTasks(); // Re-render the tasks list (empty)
}

// localStorage functionality - JSON.stringify()-converts the tasks declared back to strings
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

renderTasks()

function searchTasks(){
    
}