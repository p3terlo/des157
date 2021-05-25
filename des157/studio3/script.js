(function() {
    'use strict';

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const actionArea = document.getElementById('actions');
    const score1 = document.getElementById('score1');
    const score2 = document.getElementById('score2');

    const startSound = new Audio('media/strange-wobble.wav');
    const rollSound = new Audio('media/crunch.wav');
    const rollAgainSound = new Audio('media/poit.wav');
    const passSound = new Audio('media/bay-ngang-2.wav');

    let gameData = {
        dice: ['1die.jpg','2die.jpg','3die.jpg','4die.jpg','5die.jpg','6die.jpg'],
        players: ['Player 1', 'Player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function() {
        startSound.play();

        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The game has started!</h2>';
        gameControl.innerHTML += '<button id="quit">Want to quit?</button>';

        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the dice</button>';

        document.getElementById('roll').addEventListener('click', function() {
            rollSound.play();
            throwDice();
        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        game.innerHTML = `<p> Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1 - 1]}">
                            <img src="images/${gameData.dice[gameData.roll2 - 1]}">`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum === 2) {

            game.innerHTML += '<p> Snake eyes! </p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {

            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p> Sorry one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);

        } else {

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain"> Roll again </button> or <button id="pass"> Pass </button>';
            document.getElementById('rollagain').addEventListener('click', function() {
                rollAgainSound.play();
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function() {
                passSound.play();
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            if (gameData.index === 0) {

                console.log('player1 wins');
                score1.innerHTML = `<p>${gameData.players[0]}</p> <p>Winner</p>`;
                score2.innerHTML = `<p>${gameData.players[1]}</p> <p>Loser</p>`;

            } else {

                console.log('player2 wins');
                score1.innerHTML = `<p>${gameData.players[0]}</p> <p>Loser</p>`;
                score2.innerHTML = `<p>${gameData.players[1]}</p> <p>Winner</p>`;
            }
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = 'Start a new game?';

        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {

        score1.style.backgroundColor = '#EB9DC9';
        score1.style.border = '5px solid pink';
        score2.style.backgroundColor = '#EB9DC9';
        score2.style.border = '5px solid pink';

        score1.innerHTML = `<p>${gameData.players[0]}</p> <p>Score: ${gameData.score[0]}</p>`;
        score2.innerHTML = `<p>${gameData.players[1]}</p> <p>Score: ${gameData.score[1]}</p>`;
    }
})();