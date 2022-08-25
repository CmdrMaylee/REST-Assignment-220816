function deleteEntryByID() {
    const idValueNumber = parseInt(document.querySelector(".delete-pokemon-id-input").value);
    xhttp.open("DELETE", url + idValueNumber, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            resTextField.innerHTML = xhttp.response;
            resCodeTxtField.innerHTML = xhttp.status;
        } else {
            resTextField.innerHTML = xhttp.response;
            resCodeTxtField.innerHTML = xhttp.status;
        }
    };
    xhttp.send();
}
