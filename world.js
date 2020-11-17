var searchBox;
var searchBtn;
var searchBtnC;
var resultSection;

window.onload = function() {
    searchBox = document.getElementById("country");
    searchBtn = document.getElementById("lookup");
    searchBtnC = document.getElementById("lookup_city");
    searchBtn.addEventListener("click", searchBtnHandler);
    searchBtnC.addEventListener("click", searchBtnCHandler);
    resultSection = document.getElementById("result");
}

function searchBtnHandler(e){
    e.preventDefault();
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

function searchBtnCHandler(e){
    e.preventDefault();
    let searchValue = "cities"+searchBox.value.trim();
    fetch("world.php", {
        method: 'POST',
        body: searchValue,
        headers: {
            'Content-Type': 'text/plain'
        }
   })
   .then(response => response.text())
   .then(data => resultSection.innerHTML = data);
}