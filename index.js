// const input = document.querySelector('#input')
// const submit = document.querySelector('#button');
// submit.addEventListener('click',addButton);
// var newItem = document.querySelector('.todo-item');



// function addButton () {
//     let inputValue = input.value;
    
//     if (inputValue != ""){
//         const li = document.createElement('li');
//         li.className = 'list-group-item';
//         li.textContent = inputValue;
//         // const deletebtn = document.createElement('span')
//                 deletebtn.textContent = "🚮";
//                 deletebtn.className = "delete-btn";
//                 deletebtn.onclick = function () {
//                     li.remove();
//                 }
        
//         // deletebtn.appendChild(li)

//         newItem.appendChild(li)
        
       
//     console.log(inputValue)
//     } else {
//         alert("Please enter a task!");
//     }
    
// }
// const deleteButton = document.querySelector('#button2');
// deleteButton.addEventListener('click', delButton);

// function delButton() {
//     const li = document.querySelector('li');
//     if (li) {
//         li.remove();
//     } else {
//         console.log("No <li> element found.");
//     }
// }


function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim(); // Remove leading/trailing whitespaces

    if (taskText !== "") {
        var listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.textContent = taskText;

        var deleteButton = document.createElement("span");
        deleteButton.textContent = "❌";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        document.getElementById("todo-list").appendChild(listItem);

        input.value = ""; // Clear input field after adding task
    } else {
        alert("Please enter a task!");
    }
}


