document.querySelector("#api-status-btn").addEventListener("click", isApiRunning);
document.querySelector(".get-pokedex-btn").addEventListener("click", evaluateGet);
document.querySelector(".edit-pokemon-btn").addEventListener("click", editPokemonSetVariables);
document.querySelector(".post-pokemon-button").addEventListener("click", function () {
    createPokemonPost();
    emptyPostForm();
});
document.querySelector(".put-pokemon-button").addEventListener("click", function () {
    alterPokemonPut();
    emptyPutForm();
});
document.querySelector(".put-demo-pokemon").addEventListener("click", addDemoData);
document.querySelector(".delete-pokemon-button").addEventListener("click", deleteEntryByID);
