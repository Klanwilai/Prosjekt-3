let html = "";
var test;
let users = [];


/**
 *  @class user contains name, email, adress and picture.
 *  @constructor takes json results from @param fetchData and an @param i which is an int.
 *  grabs data from fetchData with the index passed as i.
 */
class user {
    constructor(fetchData, i) {
        this.name = fetchData.results[i].name;
        this.email = fetchData.results[i].email;
        this.adress = fetchData.results[i].location;
        this.picture = fetchData.results[i].picture.large;
    };

    /**
     *  class @function displayUser prints html to variable
     *  @param dataToHTML is the variable html is written into
     *  @return the passed variable after being updated with the html.
     */
    displayUser(dataToHTML) {
        dataToHTML = `<div class="user-body"><img src="${this.picture}" class="user-image">
                <ul class="user-info"><li>Name: ${this.name.first} ${this.name.last}</li>
                <li class="email">e-mail: ${this.email}</li>
                <li>Adress: ${this.adress.city} ${this.adress.postcode} ${this.adress.state} ${this.adress.street}</li></ul></div>`
        return dataToHTML;
    }
}


/**
 *  Runs when the page is loaded
 *  fetches randomuser data, converts to json
 *  loops through all 50 users, creating @class user objects
 *  Calls class @function displayUser to print all user data to html
 */
window.addEventListener("load", e => {
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then(data => {
        for(i = 0; i < 50; i++) {
            users[i] = new user(data, i);
            html += users[i].displayUser();
        }

        document.querySelector(".user-body-container").innerHTML = html;

    });
});
