const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.inputbox');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    // Create the outer div container
    let container = document.createElement('div');
    container.className = 'input-container';

    // Create the input p element
    let inputBox = document.createElement('p');
    inputBox.className = 'inputbox';
    inputBox.setAttribute('contenteditable', 'true');
    container.appendChild(inputBox);

    // Create the delete button (using an image)
    let deleteButton = document.createElement('img');
    deleteButton.className = 'delete-button';
    deleteButton.src = 'images/delete.png';
    container.appendChild(deleteButton);

    // Append the container to the notes container
    notesContainer.appendChild(container);

    updateStorage();
});


notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage()
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll('.inputbox');
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.execCommand('insertLineBreak');
    }
})

// search functionality