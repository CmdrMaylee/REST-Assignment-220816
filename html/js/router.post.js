function createPokemonPost() {
    let bodyObject = assemblePokeInfo("post");
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
            resTextField.innerHTML = xhttp.response;
            resCodeTxtField.innerHTML = xhttp.status;
        }
    };
    xhttp.send();
}
