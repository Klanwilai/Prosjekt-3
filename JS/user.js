let html = "";
var test;
let users = [];




class user {
    constructor(fetchData, i) {
        this.name = fetchData.results[i].name;
        this.email = fetchData.results[i].email;
        this.adress = fetchData.results[i].location;
        this.picture = fetchData.results[i].picture.large;
    };


    displayUser(dataToHTML) {
        dataToHTML = `<div class="user-body"><img src="${this.picture}" class="user-image">
                <ul class="user-info"><li>${this.name.title}: ${this.name.first} ${this.name.last}</li>
                <li class="email">${this.email}</li>
                <li>${this.adress.city} ${this.adress.postcode} ${this.adress.state} ${this.adress.street}</li></ul></div>`
        return dataToHTML;
    }
}



window.addEventListener("load", e => {
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then(data => {
        for(i = 0; i < 50; i++) {
            users[i] = new user(data, i);
            html += users[i].displayUser();
        }

        // test = test.toHTML(users[0]);
        // html = html.filter(content => content != " ");
        document.querySelector(".user-body-container").innerHTML = html;
        // document.querySelector("img").src = data.results[0].picture.large;
        // console.log(data.results[0].location);
    });
});
