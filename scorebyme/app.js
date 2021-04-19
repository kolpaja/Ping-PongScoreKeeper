// Ping-Pong score keeper
const reset = document.querySelector('#reset');
const p1ScoreEl = document.querySelector('#p1Score');
const p2ScoreEl = document.querySelector('#p2Score');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const noGames = document.querySelector('#noGames');

console.log();

reset.addEventListener('click', function (e) {
    e.preventDefault();
    p1Score.textContent = '0';
    p2Score.textContent = '0';
    p1.removeAttribute("disabled");
    p2.removeAttribute("disabled");
    p1ScoreEl.style.color = "black";
    p2ScoreEl.style.color = "black";

})

p1.addEventListener('click', function () {
    let p1Score = parseInt(p1ScoreEl.textContent)
    if (p1Score < parseInt(noGames.value)) {
        p1ScoreEl.textContent = p1Score + 1;
    }
    else
    {

        p1ScoreEl.style.color = "Green";
        p2ScoreEl.style.color = "red";
        p1.setAttribute("disabled", true);
        p2.setAttribute("disabled", true);
        }
})
p2.addEventListener('click', function () {
    let p2Score = parseInt(p2ScoreEl.textContent)
    if (p2Score < parseInt(noGames.value)) {
        p2ScoreEl.textContent = p2Score + 1;
    }
    else
    {
        p2ScoreEl.style.color = "Green";
        p1ScoreEl.style.color = "red";
        p1.setAttribute("disabled", true);
        p2.setAttribute("disabled", true);
        }
})
