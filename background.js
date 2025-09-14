const body = document.querySelector("body");
const imgButton = document.getElementById("redirectToImg")
let imgURL = ""

async function RandomBgImage() {
    fetch("https://api.waifu.pics/sfw/waifu")
    .then(response => response.json())
    .then(data => {
        body.style.backgroundImage = `url(${data.url})`;
        imgURL = data.url
    });

}

RandomBgImage()

imgButton.addEventListener("click", function(){
    window.location.href = imgURL
});