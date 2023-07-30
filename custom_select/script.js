let selectField = document.getElementById('selectField')
let selectText = document.getElementById('selectText')
let list = document.getElementById('list')
let arrow = document.getElementById('arrow')
let options = document.querySelectorAll('.options')


selectField.onclick = function () {
    list.classList.toggle('hide')
    arrow.classList.toggle('rotate')
}

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        arrow.classList.toggle('rotate')
        list.classList.toggle('hide')
    }
}

let btn = document.querySelector('.visit');

btn.addEventListener('click', function () {
    // console.log('working');
    if (selectText && selectText.innerHTML.trim() !== 'Select Social Media') {
        const socialMedia = selectText.innerHTML.trim().toLowerCase();
        window.open(`https://${socialMedia}.com`);
    }
});
