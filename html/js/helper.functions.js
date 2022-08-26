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

async function editPokemonSetVariables() {
    const pokemonJson = await returnPokemonJson();
    console.log(pokemonJson);

    const result = JSON.parse(pokemonJson);
    document.querySelector(".put-pokemon-id-input").value = result.value;
    document.querySelector(".put-pokemon-name-input").value = result.name;
    document.querySelector(".put-pokemon-type-input").value = result.type;
    document.querySelector(".put-pokemon-discovered-input").value = result.discovered;
}
