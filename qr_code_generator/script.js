let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('text');

function generateQr() {
    if (qrText.value === '') {
        qrText.focus();
        qrText.click();
        qrText.classList.add('error');
        navigator.vibrate(1000)
        alert('Please enter something in the input box');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000)
    } else {
        console.log('working')
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=1200x1200&data=' + qrText.value;
        imgBox.classList.add('show-img');
    }
}

document.getElementById('generater').addEventListener('click', function () {
    generateQr();
})