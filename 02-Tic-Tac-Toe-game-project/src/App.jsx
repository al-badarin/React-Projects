import { useEffect, useState } from 'react';

import GameBoard from './components/GameBoard/GameBoard';
import Player from './components/Player/Player';
import Log from './components/Log/Log';
import GameOver from './components/GameOver/GameOver';

import { WINNING_COMBINATIONS } from './winning-combinations';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

// function deriveWinner(gameBoard, players) {
//   let winner;

//   for (const combination of WINNING_COMBINATIONS) {
//     const firstSquareSymbol =
//       gameBoard[combination[0].row][combination[0].column];
//     const secondSquareSymbol =
//       gameBoard[combination[1].row][combination[1].column];
//     const thirdSquareSymbol =
//       gameBoard[combination[2].row][combination[2].column];

//     if (
//       firstSquareSymbol &&
//       firstSquareSymbol === secondSquareSymbol &&
//       firstSquareSymbol === thirdSquareSymbol
//     ) {
//       winner = players[firstSquareSymbol];
//     }
//   }

//   return winner;
// }

function deriveWinner(gameBoard) {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    const first = gameBoard[a.row][a.column];
    const second = gameBoard[b.row][b.column];
    const third = gameBoard[c.row][c.column];

    if (first && first === second && first === third) {
      return first;
    }
  }

  return null;
}

function App() {
  const [players, setPlayers] = useState(() => {
    const stored = localStorage.getItem('players');
    return stored ? JSON.parse(stored) : PLAYERS;
  });

  const [scores, setScores] = useState(() => {
    const stored = localStorage.getItem('scores');
    return stored ? JSON.parse(stored) : { X: 0, O: 0 };
  });

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winnerSymbol = deriveWinner(gameBoard);
  const winner = winnerSymbol ? players[winnerSymbol] : null;
  const hasDraw = gameTurns.length === 9 && !winnerSymbol;

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [scores]);

  function handleSelectSquare(rowIndex, colIndex) {
    if (winnerSymbol || hasDraw) return;

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  function handleRestart() {
    if (winnerSymbol) {
      setScores((prev) => ({
        ...prev,
        [winnerSymbol]: prev[winnerSymbol] + 1,
      }));
    }
    setGameTurns([]);
  }

  function handleFullReset() {
    setGameTurns([]);
    setScores({ X: 0, O: 0 });
    setPlayers(PLAYERS);
    localStorage.removeItem('scores');
    localStorage.removeItem('players');
  }

  return (
    <main>
      <div id="game-container">
        <ScoreBoard
          players={players}
          scores={scores}
          onReset={handleFullReset}
        />
        
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
