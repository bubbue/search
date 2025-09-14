const sInput = document.getElementById("search");
let textC = "";
const button = document.getElementById("clicksearch");
const goBack = document.getElementById("githubSite");
const usesB = document.getElementById("uses")

sInput.addEventListener("keydown", function(event) {
    textC = event.target.value
    if (event.key == "Enter" && textC.trim() != "") {
        window.location.href = "https://www.google.com/search?q=" + textC
    }
})

button.addEventListener("click", function(){
    textC = sInput.value
    if (textC.trim() != "") {
        window.location.href = "https://www.google.com/search?q=" + textC
    }
})

goBack.addEventListener("click", function(event){
    window.location.href = "https://dreamnuker-code.github.io/"
});

usesB.addEventListener("click", function(){
    window.location.href = "https://docs.waifu.im/"
})