const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const taskButton = document.getElementById("taskButton");

function addTask() {
    if (inputbox.value === '') {
        alert('You must write something');
    }
    else {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = '&#10005';
        li.innerHTML = inputbox.value;
        li.appendChild(span);
        listcontainer.appendChild(li);
        inputbox.value = '';
        saveData()
    }
}

inputbox.addEventListener('keydown', event => event.key === 'Enter' && taskButton.click());


listcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask()

console.log("I've added another functionality that if you press the inter button while inputBox is in focus it will the task 😉 at line 21")