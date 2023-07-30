let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let crntTime = document.getElementById('crntTime');
let duration = document.getElementById('duration');


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;

    let songDuration = song.duration;
    const dMinutes = Math.floor(songDuration / 60);
    const dSeconds = Math.floor(songDuration % 60);

    duration.innerText = dMinutes + ':' + dSeconds
}

function playPause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause')
        ctrlIcon.classList.add('fa-play')
    } else {
        song.play();
        ctrlIcon.classList.add('fa-pause')
        ctrlIcon.classList.remove('fa-play')
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
        const percentage = (progress.value / progress.max) * 100;
        progress.style.background = `linear-gradient(to right,  var(--main-color) ${percentage}%, #fff ${percentage}%)`;
        progress.style.filter = 'brightness(150%)';
        updateTime()
    }, 1000)
}

progress.oninput = function () {
    const percentage = (progress.value / progress.max) * 100;
    progress.style.background = `linear-gradient(to right,  var(--main-color) ${percentage}%, #fff ${percentage}%)`;
    progress.style.filter = 'brightness(150%)';
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-pause')
    ctrlIcon.classList.remove('fa-play')
}

console.log(`added extra functionality form line 54\n change song with it's data,\n progressbar background color change feature added above and\n added duration and current time above\n background color changing from code from 117`)

function updateTime() {
    let crtTime = song.currentTime;
    const minutes = Math.floor(crtTime / 60);
    const seconds = Math.floor(crtTime % 60);

    crntTime.innerText = minutes + ":" + seconds;
}

const songs = [
    {
        title: 'YALGAAR',
        artist: 'CARRYMINATI X Wily Frenzy',
        audioSrc: 'media/YALGAAR.mp3',
        imageSrc: 'media/Yalgaar.jpg',
    },
    {
        title: 'VARDAAN',
        artist: 'Vardaan  by Ajey Nagar (CarryMinati), Wily Frenzy',
        audioSrc: 'media/Vardan.mp3',
        imageSrc: 'media/Vardaan.jpg',
    },
    // Add more songs with their details
];

let currentSongIndex = 0;
const songImg = document.getElementById('songImg');
const songName = document.getElementById('songName');
const singerWriter = document.getElementById('singerWriter');
const bg = document.getElementById('musicPlayer');

function loadSong(index) {
    const songData = songs[index];
    songImg.src = songData.imageSrc;
    songName.textContent = songData.title;
    singerWriter.textContent = songData.artist;
    song.src = songData.audioSrc;
    getDominantColor(songData.imageSrc)
        .then((color) => {
            const root = document.documentElement;
            root.style.setProperty('--main-color', color);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

function changeSong(direction) {
    currentSongIndex += direction;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;

    } else if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;

    }
    loadSong(currentSongIndex);
    playPause()
}

song.addEventListener('ended', () => {
    changeSong(1);
});


function getDominantColor(imageSrc) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;

            context.drawImage(img, 0, 0);

            const imageData = context.getImageData(0, 0, img.width, img.height).data;

            const colorFrequency = {};

            for (let i = 0; i < imageData.length; i += 4) {
                const rgb = `rgb(${imageData[i]},${imageData[i + 1]},${imageData[i + 2]})`;
                colorFrequency[rgb] = (colorFrequency[rgb] || 0) + 1;
            }

            let maxFrequency = 0;
            let dominantColor = '';

            for (const color in colorFrequency) {
                if (colorFrequency[color] > maxFrequency) {
                    maxFrequency = colorFrequency[color];
                    dominantColor = color;
                }
            }

            resolve(addWhiteToColor(dominantColor));
        };

        img.onerror = () => reject(new Error('Failed to load image.'));

        img.src = imageSrc;
    });
}


function updateColors(color) {
    const root = document.documentElement;
    const mainColor = color;
    const secondaryColor = addWhiteToColor(color);

    root.style.setProperty('--main-color', mainColor);
    root.style.setProperty('--secondary-color', secondaryColor);
}

function addWhiteToColor(color) {
    const rgbValues = color.replace(/[^\d,]/g, '').split(',');
    const modifiedRgbValues = rgbValues.map((value) =>
        Math.min(parseInt(value) + 30, 255)
    );
    console.log(`rgb(${modifiedRgbValues[0]},${modifiedRgbValues[1]},${modifiedRgbValues[2]})`);
    return `rgb(${modifiedRgbValues[0]},${modifiedRgbValues[1]},${modifiedRgbValues[2]})`;
}


loadSong(currentSongIndex);