const url = "http://localhost:3000/api/pokemon/";
const xhttp = new XMLHttpRequest();
const btnGetAll = document.querySelector(".get-pokedex").addEventListener("click", getPokedex);
const btnGetOne = document
    .querySelector(".get-pokemon-id-btn")
    .addEventListener("click", getPokemonById);
const btnPostPokemon = document
    .querySelector(".post-pokemon-button")
    .addEventListener("click", createPokemonPost);

const resTextField = document.querySelector("#txtRes");
const resCodeTxtField = document.querySelector("#txtResCode");

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
    console.log(id);
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

function assemblePokeInfo() {
    let bodyObject = {};
    bodyObject.id = document.querySelector(".post-pokemon-id-input").value;
    bodyObject.name = document.querySelector(".post-pokemon-name-input").value;
    bodyObject.type = document.querySelector(".post-pokemon-type-input").value;
    bodyObject.discovered = document.querySelector(".post-pokemon-discovered-input").value;
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
        }
    };
    xhttp.send(JSON.stringify(bodyObject));
}

function alterPokemonPut() {
    let bodyObject = assemblePokeInfo();
}
