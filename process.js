let appId ="28deeef05011b567dfeaa64fe9426ec7";
let unit = "imperial";
let searchMethod = "q";
let searchBtn = document.getElementById("searchbtn");
api = "https://api.openweathermap.org/data/2.5/weather?";

function searchWeather(searchTerm){
    fetch(`${api}${searchMethod}=${searchTerm}&APPID=${appId}&units=${unit}`).then(result =>{
        return result.json()
    }).then(result =>{
        init(result);
    })
}
function init(resultFromServer){
    console.log(resultFromServer);
}

searchBtn.addEventListener('click', () =>{
    let searchTerm = document.getElementById("searchinput").value;
    if(searchTerm)
        searchWeather(searchTerm);

})