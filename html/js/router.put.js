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
