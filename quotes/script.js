const apiUrl = 'https://api.quotable.io/random';
const api2Url = 'https://api.api-ninjas.com/v1/quotes?category=';
const nextBtn = document.getElementById('next');
const sBtn = document.getElementById('search');
let uiQuote = document.getElementById('quote');
let uiAuthor = document.getElementById('author');
let category = document.getElementById('tag');
const loadingOverlay = document.getElementById("loading-overlay");


async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json()
    uiQuote.innerText = data.content;
    uiAuthor.innerText = data.author;
    loadingOverlay.style.display = "none";
}


window.addEventListener('load', function () {
    getQuote(apiUrl)
})
nextBtn.addEventListener('click', function () {
    checkNRun()
});

sBtn.addEventListener('click', function () {
    searchQuote()
});


function checkNRun() {
    if (nextBtn.innerText === 'New Random Quote') {
        getQuote(apiUrl)
    } else {
        loadingOverlay.style.display = "block";
        fetch(api2Url + localStorage.getItem("catagory"), {
            method: 'GET',
            headers: {
                'X-Api-Key': 'LxRXBhHYO0FUj0wYwjGRlA==4KpJJ80yLZPzHLml',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                uiQuote.innerText = result[0].quote;
                uiAuthor.innerText = result[0].author;
                loadingOverlay.style.display = "none";
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Error:\n Couldnt found", error);
                loadingOverlay.style.display = "none";
            });
    }
}


// search quotes
function searchQuote() {
    if (category.value === '') {
        alert('Please enter a catagory of your quote or click on "New Random Quote" button')
        document.getElementById('tag').focus()
        document.getElementById('tag').click()
    } else {
        loadingOverlay.style.display = "block";
        fetch(api2Url + category.value, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'LxRXBhHYO0FUj0wYwjGRlA==4KpJJ80yLZPzHLml',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                uiQuote.innerText = result[0].quote;
                uiAuthor.innerText = result[0].author;
                localStorage.setItem('catagory', document.getElementById('tag').value);
                nextBtn.innerHTML = `Next quote on ${localStorage.getItem('catagory')}`;
                document.getElementById('tag').value = '';
                loadingOverlay.style.display = "none";
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Error:\n Couldnt found", error);
                loadingOverlay.style.display = "none";
            });
    }
}


// placeholder animation
let placeholders = ["Age...", "Alone...", "Amazing...", "Anger...", "Architecture...", "Art...", "Attitude...", "Beauty...", "Best...", "Birthday...", "Business...", "Car...", "Change...", "Communications...", "Computers...", "Cool...", "Courage...", "Dad...", "Dating...", "Death...", "Design...", "Dreams...", "Education...", "Environmental...", "Equality...", "Experience...", "Failure...", "Faith...", "Family...", "Famous...", "Fear...", "Fitness...", "Food...", "Forgiveness...", "Freedom...", "Friendship...", "Funny...", "Future...", "God...", "Good...", "Government...", "Graduation...", "Great...", "Happiness...", "Health...", "History...", "Home...", "Hope...", "Humor...", "Imagination...", "Inspirational...", "Intelligence...", "Jealousy...", "Knowledge...", "Leadership...", "Learning...", "Legal...", "Life...", "Love...", "Marriage...", "Medical...", "Men...", "Mom...", "Money...", "Morning...", "Movies...", "Success..."].sort(() => Math.random() - 0.5);

let inputField = document.getElementById("tag");
let counter = 0;
let typingInterval = 100;

function updatePlaceholder() {
    let currentPlaceholder = placeholders[counter++ % placeholders.length];
    let updatedPlaceholder = "";
    let currentLetterIndex = 0;

    let typing = setInterval(() => {
        let currentLetter = currentPlaceholder[currentLetterIndex++];
        updatedPlaceholder += currentLetter;
        inputField.placeholder = updatedPlaceholder;

        if (currentLetterIndex === currentPlaceholder.length) {
            clearInterval(typing);
            setTimeout(updatePlaceholder, 2000);
        }
    }, typingInterval);
}
updatePlaceholder();


// tweet functionality
function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=` + uiQuote.innerHTML + "---- by " + uiAuthor.innerHTML, "Tweet Window", "width=600, height=300");
}

document.getElementById('tweet').addEventListener('click', function () {
    tweet()
});



// loading
loadingOverlay.style.display = "block";


// extras (press enter to search)

category.addEventListener('keydown', event => event.key === 'Enter' && sBtn.click());


// download as png 

document.getElementById("save").addEventListener("click", function () {
    document.getElementById('btns').style.display = 'none';
    html2canvas(document.getElementById("quoteBox")).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        // document.getElementById("previewImg").appendChild(canvas);
        anchorTag.download = `${prompt('Enter file name to save')}.png`;
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
        document.getElementById('btns').style.display = 'flex';
    });
});