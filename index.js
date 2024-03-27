const titleInput = document.querySelector('#titleInput');
const descriptionInput = document.querySelector('#descriptionInput');
const addButton = document.querySelector('#button');
const newItem = document.querySelector('#todo-item');
const deleteButton = document.querySelector('#button2');

addButton.addEventListener('click',addTask);

function addTask () {
    const titleValue = titleInput.value.trim();
    const descriptionValue = descriptionInput.value.trim(); 
    
    if (titleValue != ""){
        const timestamp = new Date().toLocaleString(); 
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML =  ` <strong>Title:</strong> ${titleValue}<br>
        <strong>Description:</strong> ${descriptionValue}<br>
        <strong>Timestamp:</strong> ${timestamp}
        <i onclick="delTask()" class="fa-solid fa-trash"></i>
        <i oclick="updateTask(event)" class="fa-solid fa-pen-to-square"></i>`; 
        newItem.appendChild(li)
        
    titleInput.value = '';
    descriptionInput.value = '';
 
    } else {
        alert("Please enter a task!");
    }
    
}

deleteButton.addEventListener('click', delTask);

function delTask() {
    const li = document.querySelector('li');
    if (li) {
        li.remove();
    } else {
        console.log("No <li> element found.");
    }
}


function updateTask(event) {
    const li = event.target.closest('li');
    const title = li.querySelector('strong');
    const description = title.nextElementSibling;
    const newTitle = prompt("Enter new title:", title.textContent.replace("Title: ", ""));
    const newDescription = prompt("Enter new description:", description.textContent.replace("Description: ", ""));
    if (newTitle !== null && newDescription !== null) {
        title.textContent = `Title: ${newTitle}`;
        description.textContent = `Description: ${newDescription}`;
    }
}