let toastBox = document.getElementById('tostBox')
let sccsMsg = '<i class="fa-solid fa-circle-check" style="color: green;"></i> Successfully submitted';
let errMsg = '<i class="fa-solid fa-circle-xmark" style="color: red;"></i> Please fix the error!';
let invldMsg = '<i class="fa-sharp fa-solid fa-circle-exclamation" style="color: orange;"></i> Invalid input check again';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 6000);
}