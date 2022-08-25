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
