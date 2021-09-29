var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#txtArea");
var outputDiv = document.querySelector("#div-output");

var url = "	https://api.funtranslations.com/translate/yoda.json"


function getUrl(text) {
    return url + "?" + "text=" + text;
}

function alertMessage() {
    return alert("error! Limit reached")
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    var text = txtArea.value;
    fetch(getUrl(text))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })


})