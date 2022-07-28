// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
let adviceID = document.getElementById('advice-ID');
let advice = document.getElementById('advice-text');
var dice = document.getElementById('dice');
const transition = document.getElementById('advice-transition')
// let transition = document.getElementsByClassName('advice-container');

const API = 'https://api.adviceslip.com/advice';

function displayAdvice() {
    // transition.classList.remove('transition')
    // transition.classList.remove('transition');
    console.log(transition.className);

    transition.classList.toggle('transition')
    // transition.classList.remove('transition')
    console.log(transition.className);
    // void transition.offsetWidth;
    // console.log(transition.className);
    // transition.classList.remove('transition')
    // console.log(transition.className);
    // setTimeout(() => {
    //     // transition.classList.add('transition');
    //     transition.classList.toggle('transition')
    // }, 100);
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