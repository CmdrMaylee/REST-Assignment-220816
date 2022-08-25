const url = "http://localhost:3000/api/pokemon/";
const xhttp = new XMLHttpRequest();
btnGetAll = document.querySelector(".get-pokedex").addEventListener("click", evaluateGet);
document.querySelector(".post-pokemon-button").addEventListener("click", createPokemonPost);
document.querySelector(".put-pokemon-button").addEventListener("click", alterPokemonPut);
document.querySelector(".put-demo-pokemon").addEventListener("click", addDemoData);
document.querySelector(".delete-pokemon-button").addEventListener("click", deleteEntryByID);

const resTextField = document.querySelector("#txtRes");
const resCodeTxtField = document.querySelector("#txtResCode");

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
            console.log("nope");
            resTextField.innerHTML = xhttp.response;
            resCodeTxtField.innerHTML = xhttp.status;
        }
    };
    xhttp.send();
}

function assemblePokeInfo() {
    let bodyObject = {};
    const stringId = document.querySelector(".post-pokemon-id-input").value;
    bodyObject.id = parseInt(stringId);
    bodyObject.name = document.querySelector(".post-pokemon-name-input").value;
    bodyObject.type = document.querySelector(".post-pokemon-type-input").value;
    const discovered = document.querySelector(".post-pokemon-discovered-input").value;
    bodyObject.discovered = discovered === "true";

    return bodyObject;
}

function createPokemonPost() {
    let bodyObject = assemblePokeInfo();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            const objects = JSON.parse(xhttp.responseText);
            resTextField.innerHTML = JSON.stringify(objects, null, 2);
        } else {
            resTextField.innerHTML = xhttp.response;
            resCodeTxtField.innerHTML = xhttp.status;
        }
    };
    xhttp.send(JSON.stringify(bodyObject));
}

function addDemoData() {
    xhttp.open("POST", url + "demo", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 201) {
            console.log(xhttp.responseText);
            resTextField.innerHTML = xhttp.response;
            resCodeTxtField.innerHTML = xhttp.status;
        }
    };
    xhttp.send();
}

function alterPokemonPut() {
    let bodyObject = assemblePokeInfo();
    const newIdValueNumber = parseInt(document.querySelector(".post-pokemon-new-id-input").value);
    console.log(newIdValueNumber);
    xhttp.open("PUT", url + bodyObject.id, true);
    if (isNaN(newIdValueNumber) || newIdValueNumber !== "") bodyObject.id = newIdValueNumber;
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            const objects = JSON.parse(xhttp.responseText);
            resTextField.innerHTML = JSON.stringify(objects, null, 2);
        } else {
            resTextField.innerHTML = xhttp.response;
            resCodeTxtField.innerHTML = xhttp.status;
        }
    };
    xhttp.send(JSON.stringify(bodyObject));
}

function deleteEntryByID() {
    const idValueNumber = parseInt(document.querySelector(".delete-pokemon-id-input").value);
    xhttp.open("DELETE", url + idValueNumber, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            resTextField.innerHTML = xhttp.responseText;
        }
    };
    xhttp.send();
}
