let ok = document.getElementById('ok');
let box = document.querySelector('.popup');
let btn = document.getElementById('btn');


function hide() {
    box.classList.remove('open-popup')
}

function show() {
    box.classList.add('open-popup')
}

btn.addEventListener('click', function(){
    show()
})

ok.addEventListener('click', function(){
    hide()
})