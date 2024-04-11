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

function delTask(index) {
    tasks.splice(index, 1);
    saveTasksToLocalStorage();
    renderTasks();
}

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


function deleteAllTasks() {
    tasks.splice(0, tasks.length);
    saveTasksToLocalStorage();
    renderTasks(); 
}


function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

renderTasks()

function searchTasks(letter) {
    const filteredTasks = tasks.filter(task => {
        // Convert both task title and description to lowercase for case-insensitive search
        const title = task.title.toLowerCase();
        const description = task.description.toLowerCase();
        const searchLetter = letter.toLowerCase();
        // Check if either title or description starts with the search letter
        return title.startsWith(searchLetter) || description.startsWith(searchLetter);
    });

    // Render the filtered tasks
    renderFilteredTasks(filteredTasks);
}

function renderFilteredTasks(filteredTasks) {
    newItem.innerHTML = '';
    filteredTasks.slice().reverse().forEach((task, _index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>Title:</strong> ${task.title}<br>
        <strong>Description:</strong> ${task.description}<br>
        <strong>Timestamp:</strong> ${task.timestamp}
        <i onclick="delTask(${tasks.indexOf(task)})" class="fa-solid fa-trash"></i>
        <i onclick="updateTask(${tasks.indexOf(task)})" class="fa-solid fa-pen-to-square"></i>`;
      
        newItem.appendChild(li);
    });
}
