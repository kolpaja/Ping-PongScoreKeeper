
const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}
const player2 = {
    score : 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const reset = document.querySelector('#reset')
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

// let p1Score = 0;
// let p2Score = 0;
winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener('click', function () {
    updateScores(player1,player2)
    // if (!isGameOver) {
    //     p1Score += 1;
    //     if (p1Score === winningScore) {
    //         isGameOver = true;
    //         p1Display.classList.add('has-text-success')
    //         p2Display.classList.add('has-text-danger')
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;
    //     }
    //     p1Display.textContent = p1Score;
    // }
})

player2.button.addEventListener('click', function () {
    updateScores(player2,player1)

    // if (!isGameOver) {
    //     p2Score += 1;
    //     if (p2Score === winningScore) {
    //         isGameOver = true;
    //         p2Display.classList.add('has-text-success')
    //         p1Display.classList.add('has-text-danger')
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;
    //     }
    //     p2Display.textContent = p2Score;
    // }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    Reset();
})

reset.addEventListener('click', Reset)

function Reset() {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
    // p1Score = 0;
    // p2Score = 0;
    // p1Display.textContent = 0;
    // p2Display.textContent = 0;
    // p1Display.classList.remove('has-text-success', 'has-text-danger')
    // p2Display.classList.remove('has-text-success', 'has-text-danger')
    // p1Button.disabled = false;
    // p2Button.disabled = false;
    
}