/// <reference path="base.values.js" />

function evaluateGet() {
    const intId = parseInt(document.querySelector(".get-pokemon-id-input").value);
    if (isNaN(intId)) getPokedex();
    else getPokemonById();
}

function getPokedex() {
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            const objects = JSON.parse(xhttp.responseText);
            resTextField.innerHTML = JSON.stringify(objects, null, 2);
            resCodeTxtField.innerHTML = this.status;
        } else {
            resTextField.innerHTML = xhttp.response;
            resCodeTxtField.innerHTML = xhttp.status;
        }
    };
    xhttp.send();
}

function getPokemonById() {
    const id = document.querySelector(".get-pokemon-id-input").value;
    xhttp.open("GET", url + id, true);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            const objects = JSON.parse(xhttp.responseText);
            resTextField.innerHTML = JSON.stringify(objects, null, 2);
        } else {
            resTextField.innerHTML = xhttp.response;
            resCodeTxtField.innerHTML = xhttp.status;
        }
    };
    xhttp.send();
}

function returnPokemonJson(id) {
    xhttp.open("GET", url + id, false);
    xhttp.send();
    return xhttp.response;
}
