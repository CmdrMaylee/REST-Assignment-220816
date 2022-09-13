function alterPokemonPut() {
    let bodyObject = assemblePokeInfo("put");
    const idValueNumber = parseInt(
        document.querySelector(".put-pokemon-id-input").value
    );
    console.log(bodyObject.pokeValue + "WOOOOOO");
    xhttp.open("PUT", url + bodyObject.id, true);
    if (!isNaN(idValueNumber)) bodyObject.id = idValueNumber;
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
    // console.log(JSON.stringify(bodyObject));
}
