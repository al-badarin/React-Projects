import './ScoreBoard.css';

export default function ScoreBoard({ players, scores, onReset }) {
  return (
    <div className="scoreboard">
      <div>
        <p>{players.X} </p>
        <p>Wins: {scores.X} 🏆</p>
      </div>

      <div>
        <p>{players.O} </p>
        <p>Wins: {scores.O} 🏆</p>
      </div>

      <button onClick={onReset}>Reset Game & Scores</button>
    </div>
  );
}
