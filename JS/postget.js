// function kolloFetch(url) {
//     return new Promise ((resolve, reject) => {
//         var req = new XMLHttprequest();
//         req.addEventListener("load", resolve);
//         req.open("get", url);
//         req.send();
//     });
// }


document.querySelector(`button[type="submit"]`).addEventListener("click", e => {
    if (document.querySelector("#POST").checked) {
        var form = document.querySelector("form");
        var data = new FormData(form);
        fetch("http://folk.ntnu.no/oeivindk/imt1441/echo.php", {
            method: "POST",
            body: data
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector(".pg-output").innerHTML = JSON.stringify(data);
        })
    }
    else {
        var data = new URLSearchParams;
        data.append("Name", document.querySelector(`input[name="name"]`));
        data.append("Street", document.querySelector(`input[name="street"]`));
        data.append("Postal code", document.querySelector(`input[name="postal"]`));
        data.append("Area", document.querySelector(`input[name="area"]`));
        console.log(data);
        fetch(`http://folk.ntnu.no/oeivindk/imt1441/echo.php`+data.toString(), {
            method: GET
        })
        .then(res => res.json())
        .then(data => {
            document.querySelector(".pg-output").innerHTML = JSON.stringify(data);
        });
    }

});

// document.querySelector(`button[type="submit"]`).addEventListener("click", e => {
//     var form = document.querySelector("form");
//     var data = new FormData(form);
//     var param = `?name=${encodeURIComponent()}?street${}?`
//     fetch("http://folk.ntnu.no/oeivindk/imt1441/echo.php")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
// });
