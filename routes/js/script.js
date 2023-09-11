let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

let questionel = document.getElementById("question");
let inputel = document.getElementById("input")
let formel = document.getElementById("form");
let scoreel = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0
}

scoreel.innerText = `Score: ${score}`

questionel.innerText = `what is ${num1} multiply by ${num2} ?`

let correctanswer = num1 * num2;

formel.addEventListener("submit", () => {
    let userAns = +inputel.value

    if (userAns === correctanswer) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}