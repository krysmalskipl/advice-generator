// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
let adviceID = document.getElementById('advice-ID');
let advice = document.getElementById('advice-text');
var dice = document.getElementById('dice');

const API = 'https://api.adviceslip.com/advice';

function displayAdvice() {
    request.open('GET', API, true);
    request.send();
    request.onload = function () {
        var data = JSON.parse(this.response);
        adviceID.innerHTML = (`#${data.slip.id}`);
        advice.innerHTML = (`${data.slip.advice}`);
    }
}

dice.addEventListener("click", displayAdvice)

displayAdvice()