function alterPokemonPut() {
    let bodyObject = assemblePokeInfo("put");
    const idValueNumber = parseInt(document.querySelector(".put-pokemon-id-input").value);
    /* let newNum = idValueNumber;
    newNum++; */
    xhttp.open("PUT", url + idValueNumber, true);
    if (!isNaN(idValueNumber)) bodyObject.id = idValueNumber; // To test id values changing between url-params and body text, uncomment line 4 & 5, and change "idValueNumber" to "newNum" on this line
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
