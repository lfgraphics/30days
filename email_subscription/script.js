let scriptUrl = `https://script.google.com/macros/s/AKfycby52isJrnFGvDlUBt8W7SrNkW-dt0c__pb9f7iDisSiB4DwXaozxoyLk11w8Fc2GbXr/exec`

const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
        .then(response => 
            document.getElementById('msg').innerHTML = `Thank you for subscribing`);
    setTimeout(function () { document.getElementById('msg').innerHTML = ''},5000);
    form.reset()
        .catch(error => alert('Error!', error.message))
})