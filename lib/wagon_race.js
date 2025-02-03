let player1Position = 0;
let player2Position = 0;
const totalCells = document.querySelectorAll('#player1-race td').length - 1;
let gameOver = false;

function movePlayer(playerID) {
  if (gameOver) return;

  const playerRow = document.querySelector(`#${playerID}-race`);
  const currentPlayerPosition = playerID === 'player1' ? player1Position : player2Position;
  const nextPosition = currentPlayerPosition + 1;

  if (nextPosition <= totalCells) {
    const currentCell = playerRow.querySelectorAll('td')[currentPlayerPosition];
    currentCell.classList.remove('active');
    const nextCell = playerRow.querySelectorAll('td')[nextPosition];
    nextCell.classList.add('active');

    if (playerID === 'player1') {
      player1Position = nextPosition;
    } else {
      player2Position = nextPosition;
    }
  }

  if (player1Position === totalCells) {
    endGame("Le Wagon");
  } else if (player2Position === totalCells) {
    endGame("Porsche 911");
  }
}

function endGame(winner) {
  gameOver = true;
  document.getElementById('winnerMessage').textContent = `${winner} wins the race!💨🎉`;
  document.getElementById('winnerModal').style.display = 'flex';
}

document.getElementById('restartGame').addEventListener('click', function() {
  player1Position = 0;
  player2Position = 0;
  gameOver = false;

  document.querySelectorAll('#player1-race td').forEach(td => td.classList.remove('active'));
  document.querySelectorAll('#player2-race td').forEach(td => td.classList.remove('active'));
  document.querySelector('#player1-race td').classList.add('active');
  document.querySelector('#player2-race td').classList.add('active');

  document.getElementById('winnerModal').style.display = 'none';
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Q' || event.key === 'q') {
    movePlayer('player1');
  }
  if (event.key === 'P' || event.key === 'p') {
    movePlayer('player2');
  }
});
