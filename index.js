const input = document.querySelector('#input')
const submit = document.querySelector('#button');
submit.addEventListener('click',addButton);
const newItem = document.querySelector('#todo-item');
const deleteButton = document.querySelector('#button2');



function addButton () {
    let inputValue = input.value;
    
    if (inputValue != ""){
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = inputValue +  '<i onclick="delButton()" class="fa-solid fa-trash"></i>' +  '<i class="fa-solid fa-pen-to-square"></i>' ;
        // const deletebtn = document.createElement('span')
                // deletebtn.textContent = "🚮";
                // deletebtn.className = "delete-btn";
                // deletebtn.onclick = function () {
                //     li.remove();
                // }
        
        // deletebtn.appendChild(li)

        newItem.appendChild(li)
        
       
    console.log(inputValue)
    } else {
        alert("Please enter a task!");
    }
    
}

deleteButton.addEventListener('click', delButton);

function delButton() {
    const li = document.querySelector('li');
    if (li) {
        li.remove();
    } else {
        console.log("No <li> element found.");
    }
}