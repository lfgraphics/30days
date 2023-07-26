let imgbox = document.querySelector('.imgBox');
let imgwrap = document.querySelector('.imgWrap');
let original = document.getElementById('originalImg');
let line = document.getElementById('line');

original.style.width = imgbox.offsetWidth + 'px'

let leftSpace = imgbox.offsetLeft;

imgbox.onmousemove = function (e) {
    let boxWidth = (e.pageX - leftSpace) + 'px';
    imgwrap.style.width = boxWidth;
    line.style.left = boxWidth;
}