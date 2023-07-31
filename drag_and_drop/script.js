const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imageView = document.getElementById('imgview');

inputFile.addEventListener('change', uploadImage);

function uploadImage() {
    const selectedFile = inputFile.files[0];

    if (!selectedFile) {
        console.error('No file selected.');
        return;
    }

    if (!selectedFile.type.startsWith('image/')) {
        console.error('Selected file is not an image.');
        return;
    }

    let imgLink = URL.createObjectURL(selectedFile);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.innerHTML = ''
    imageView.style.border = `none`;
}

dropArea.addEventListener('dragover', function(e){
    e.preventDefault();
});
dropArea.addEventListener('drop', function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});