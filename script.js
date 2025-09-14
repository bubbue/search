const sInput = document.getElementById("search");
let textC = "";
const button = document.getElementById("clicksearch");
const goBack = document.getElementById("githubSite");

sInput.addEventListener("keydown", function(event){
    textC = event.target.value;
    if (event.key == "Enter" && textC != "") {
        window.location.href = "https://www.google.com/search?q=" + textC
    };
});

button.addEventListener("click", function(event){
    textC = sInput.value;
    if (textC != "") {
        window.location.href = "https://www.google.com/search?q=" + textC
    }
});

goBack.addEventListener("click", function(event){
    window.location.href = "file:///home/dafto/Downloads/My%20site/index.html"
});