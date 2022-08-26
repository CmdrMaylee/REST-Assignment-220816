function isApiRunning() {
    const apiStatusText = document.querySelector("#api-status-txt");
    xhttp.open("GET", url, false);
    try {
        xhttp.send();
        apiStatusText.innerHTML = "ONLINE";
        apiStatusText.classList = "server-up";
    } catch {
        apiStatusText.innerHTML = "OFFLINE";
        apiStatusText.classList = "server-down";
    }
}

function assemblePokeInfo(endpoint) {
    let bodyObject = {};
    if (endpoint === "post") {
        const stringId = document.querySelector(".post-pokemon-id-input").value;
        bodyObject.id = parseInt(stringId);
        bodyObject.name = document.querySelector(".post-pokemon-name-input").value;
        bodyObject.type = document.querySelector(".post-pokemon-type-input").value;
        const discovered = document.querySelector(".post-pokemon-discovered-input").value;
        bodyObject.discovered = discovered === "true";
    } else if (endpoint === "put") {
        const stringId = document.querySelector(".put-pokemon-id-input").value;
        bodyObject.id = parseInt(stringId);
        bodyObject.name = document.querySelector(".put-pokemon-name-input").value;
        bodyObject.type = document.querySelector(".put-pokemon-type-input").value;
        const discovered = document.querySelector(".put-pokemon-discovered-input").value;
        bodyObject.discovered = discovered === "true";
    }

    return bodyObject;
}

function editPokemonSetVariables() {
    const id = document.querySelector(".get-pokemon-id-input").value;
    if (id === "") {
        resTextField.innerHTML = "ID must be provided to edit a Pokemon";
        resCodeTxtField.innerHTML = "400";
    }

    let pokemonJson = returnPokemonJson();

    const result = JSON.parse(pokemonJson);
    if (result.id !== undefined) {
        document.querySelector(".put-pokemon-id-input").value = result.id;
        document.querySelector(".put-pokemon-name-input").value = result.name;
        document.querySelector(".put-pokemon-type-input").value = result.type;
        document.querySelector(".put-pokemon-discovered-input").value = result.discovered;
    } else {
        document.querySelector(".put-pokemon-id-input").value = "";
        document.querySelector(".put-pokemon-name-input").value = "";
        document.querySelector(".put-pokemon-type-input").value = "";
        document.querySelector(".put-pokemon-discovered-input").value = "";
    }
}
