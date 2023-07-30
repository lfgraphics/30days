let scrollContenr = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContenr.addEventListener('wheel', (e) =>{
    e.preventDefault();
    scrollContenr.scrollLeft += e.deltaY;
})

nextBtn.addEventListener('click', ()=>{
    scrollContenr.scrollLeft += 900;
})
backBtn.addEventListener('click', ()=>{
    scrollContenr.scrollLeft -= 900;
})