const body = document.querySelector("body");
const imgButton = document.getElementById("redirectToImg");
let redirect = "";

const params = {
    included_tags: "waifu",
    orientation: "landscape",
    is_nsfw: "false"
}

const queryParams = new URLSearchParams

for (const key in params) {
    if (Array.isArray(params[key])) {
        params[key].forEach(value => {
            queryParams.append(key, value)
        })
    }
    else {
        queryParams.set(key, params[key])
    }
}

const fetchUrl = `https://api.waifu.im/search?${queryParams.toString()}`

async function fetchImg() {
    fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
        body.style.backgroundImage = `url(${data.images[0].url})`;
        redirect = data.images[0].url;
    });
}

fetchImg()

imgButton.addEventListener("click", function() {
    window.location.href = redirect;
})
