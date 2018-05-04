

/**
 * Code runs when you click on the submit button
 * POST is checked by default, if post, the form is converted to new formdata named FormData
 * Unessecary form data is then deleted, fetch is called, with method set as POST
 * results of fetch is converted to json, then lastly stringified and printed to html.
 */
document.querySelector(`button[type="submit"]`).addEventListener("click", e => {
    if (document.querySelector("#POST").checked) {
        var form = document.querySelector("form");
        var data = new FormData(form);
        data.delete("PG");

        fetch("http://folk.ntnu.no/oeivindk/imt1441/echo.php", {
            method: "POST",
            body: data
        }).then(res => res.json())
        .then(data => {
            document.querySelector(".pg-output").innerHTML = JSON.stringify(data, null, 4);
        })
    }
    /**
     * If GET is checked on submit, a new URLSearchParams variable is created, named data
     * Relevant data is appended to the variable
     * fetch is called, with the URLSearchParams variable added to the URL.
     * Results is converted to json and printed to html
     */
    else {
        var data = new URLSearchParams;
        data.append("Name", document.querySelector(`input[name="name"]`).value);
        data.append("Street", document.querySelector(`input[name="street"]`).value);
        data.append("Postal code", document.querySelector(`input[name="postal"]`).value);
        data.append("Area", document.querySelector(`input[name="area"]`).value);

        fetch(`http://folk.ntnu.no/oeivindk/imt1441/echo.php?`+data.toString())
        .then(res => res.json())
        .then(data => {
            document.querySelector(".pg-output").innerHTML = JSON.stringify(data, null, 4);

        });
    }

});
