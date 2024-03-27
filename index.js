// const titleInput = document.querySelector('#titleInput');
// const descriptionInput = document.querySelector('#descriptionInput');
// const addButton = document.querySelector('#button');
// const newItem = document.querySelector('#todo-item');
// const deleteButton = document.querySelector('#button2');

// addButton.addEventListener('click',addTask);

// function addTask () {
//     const titleValue = titleInput.value.trim();
//     const descriptionValue = descriptionInput.value.trim(); 
    
//     if (titleValue != ""){
//         const timestamp = new Date().toLocaleString(); 
//         const li = document.createElement('li');
//         li.className = 'list-group-item';
//         li.innerHTML =  ` <strong>Title:</strong> ${titleValue}<br>
//         <strong>Description:</strong> ${descriptionValue}<br>
//         <strong>Timestamp:</strong> ${timestamp}
//         <i onclick="delTask()" class="fa-solid fa-trash"></i>
//         <i oclick="updateTask(event)" class="fa-solid fa-pen-to-square"></i>`; 
//         newItem.appendChild(li)
        
//     titleInput.value = '';
//     descriptionInput.value = '';
 
//     } else {
//         alert("Please enter a task!");
//     }
    
// }

// deleteButton.addEventListener('click', delTask);

// function delTask() {
//     const li = document.querySelector('li');
//     if (li) {
//         li.remove();
//     } else {
//         console.log("No <li> element found.");
//     }
// }


// function updateTask(event) {
//     const li = event.target.closest('li');
//     const title = li.querySelector('strong');
//     const description = title.nextElementSibling;
//     const newTitle = prompt("Enter new title:", title.textContent.replace("Title: ", ""));
//     const newDescription = prompt("Enter new description:", description.textContent.replace("Description: ", ""));
//     if (newTitle !== null && newDescription !== null) {
//         title.textContent = `Title: ${newTitle}`;
//         description.textContent = `Description: ${newDescription}`;
//     }
// }
const tasks = [];

const addButton = document.querySelector('#button');
const newItem = document.querySelector('#todo-item');
const deleteButton = document.querySelector('#button2'); 

addButton.addEventListener('click', addTask);
deleteButton.addEventListener('click', delTask);

function addTask() {
    const titleInput = document.querySelector('#titleInput');
    const descriptionInput = document.querySelector('#descriptionInput');
    const titleValue = titleInput.value.trim();
    const descriptionValue = descriptionInput.value.trim();

    if (titleValue !== "") {
        const timestamp = new Date().toLocaleString();
        const task = {
            title: titleValue,
            description: descriptionValue,
            timestamp: timestamp
        };
        tasks.push(task);
        renderTasks();
        titleInput.value = '';
        descriptionInput.value = '';
    } else {
        alert("Please enter a task!");
    }
}

function renderTasks() {
    newItem.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>Title:</strong> ${task.title}<br>
        <strong>Description:</strong> ${task.description}<br>
        <strong>Timestamp:</strong> ${task.timestamp}
        <i onclick="delTask(${index})" class="fa-solid fa-trash"></i>
        <i onclick="updateTask(${index})" class="fa-solid fa-pen-to-square"></i>`;
        newItem.appendChild(li);
    });
}

function delTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateTask(index) {
    const task = tasks[index];
    const newTitle = prompt("Enter new title:", task.title);
    const newDescription = prompt("Enter new description:", task.description);
    if (newTitle !== null && newDescription !== null) {
        task.title = newTitle;
        task.description = newDescription;
        renderTasks();
    }
}
function delTaskAll(index) {
    tasks.splice(index, 1);
    renderTasks();
}
