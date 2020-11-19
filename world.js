var searchBox;
var searchBtn;
var searchBtnC;
var resultSection;
var phpFile = "world.php";
var getCountry = "?country=";
var getContext = "&context=";

window.onload = function() {
    searchBox = document.getElementById("country");
    searchBtn = document.getElementById("lookup");
    searchBtnC = document.getElementById("lookup_city");
    resultSection = document.getElementById("result");
    searchBtn.addEventListener("click", searchBtnHandler);
    searchBtnC.addEventListener("click", searchBtnCHandler);
}

function searchBtnHandler(e){
    e.preventDefault();
    let url = createURL("countries");
    fetcher(url);
}

function searchBtnCHandler(e){
    e.preventDefault();
    let url = createURL("cities");
    fetcher(url);
}

function createURL(contxt) {
    let country = getCountry+searchBox.value.trim();
    let context = getContext+contxt;
    let url = phpFile+country+context;
    return url;
}

function fetcher(url){
    fetch(url).then(response => response.text()).then(data => resultSection.innerHTML = data);
}