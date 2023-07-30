const accessKey = "LwmZhbRAml4EWIVoaWgrBAsSffEbd-nxqsC2JEQU5aA";
const imageGrid = document.getElementById("imageGrid");
let page = 1;
let searchQuery = "";

async function fetchImages(query, page) {
    const perPage = 15;
    const apiUrl = `https://api.unsplash.com/search/photos/?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
}

async function displayImages(query) {
    searchQuery = query;
    page = 1;

    const images = await fetchImages(query, page);
    if (images.length === 0) {
        imageGrid.innerHTML = "<p>No images found</p>";
        return;
    }

    const imageElements = images.map((image) => {
        const imageElement = document.createElement("img");
        imageElement.classList.add("image-item");
        imageElement.src = image.urls.small;
        imageElement.alt = image.alt_description;
        return imageElement;
    });

    imageGrid.innerHTML = "";
    imageElements.forEach((imageElement) => {
        imageGrid.appendChild(imageElement);
    });
}

function loadMoreImages() {
    page++;
    fetchImages(searchQuery, page).then((images) => {
        const imageElements = images.map((image) => {
            const imageElement = document.createElement("img");
            imageElement.classList.add("image-item");
            imageElement.src = image.urls.small;
            imageElement.alt = image.alt_description;
            return imageElement;
        });

        imageElements.forEach((imageElement) => {
            imageGrid.appendChild(imageElement);
        });
    });
}

function searchImages() {
    const searchBox = document.getElementById("searchBox");
    const query = searchBox.value.trim();
    if (query !== "") {
        displayImages(query);
    }
}

document.getElementById("searchBtn").addEventListener("click", searchImages);
document.getElementById("more").addEventListener("click", loadMoreImages);