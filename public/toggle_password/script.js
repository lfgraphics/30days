let paswrd = document.getElementById('pswrd');
let icon = document.getElementById('icon');

icon.addEventListener('click', function () {
    if (icon.classList.contains('fa-eye-slash')) {
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
        paswrd.type = 'text';
    }
    else{
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
        paswrd.type = 'password';
    }
})