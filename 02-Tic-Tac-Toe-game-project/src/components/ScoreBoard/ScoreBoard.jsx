import './ScoreBoard.css';

export default function ScoreBoard({ players, scores, onReset }) {
  return (
    <div className="scoreboard">
      <p>{players.X} Wins: {scores.X}</p>
      <p>{players.O} Wins: {scores.O}</p>
      <button onClick={onReset}>Reset Game & Scores</button>
    </div>
  );
}
