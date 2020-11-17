var searchBox;
var searchBtn;
var resultSection;

window.onload = function() {
    searchBox = document.getElementById("country");
    searchBtn = document.getElementById("lookup");
    searchBtn.addEventListener("click", searchBtnHandler);
    resultSection = document.getElementById("result");
}

function searchBtnHandler(e){
    e.preventDefault();
    console.log("Button clicked");
    console.log(searchBox.value);
    fetch("world.php", {
        method: 'POST',
        body: searchBox.value.trim(),
        headers: {
            'Content-Type': 'text/plain'
        }
   })
   .then(response => response.text())
   .then(data => resultSection.innerHTML = data);
}