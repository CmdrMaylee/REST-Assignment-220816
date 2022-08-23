const url = "http://localhost:3000/api/pokemon/";
const xhttp = new XMLHttpRequest();
const btnGetAll = document.querySelector(".get-pokedex").addEventListener("click", getPokedex());
const btnPostPokemon = document
    .querySelector(".post-pokemon-button")
    .addEventListener("click", createPokemonPost());

const resTextField = document.querySelector("#txtRes");

function getPokedex() {
    xhttp.open("GET", url);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            resTextField.innerHTML = JSON.stringify(objects, null, 2);
        }
    };
}

function createPokemonPost(id) {
    xhttp.open("POST", url + id);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            resTextField.innerHTML = JSON.stringify(objects, null, 2);
        }
    };
}
