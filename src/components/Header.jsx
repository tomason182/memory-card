import styles from "./Header.module.css";
import PropTypes from "prop-types";

export default function Header({ score, bestScore }) {
  return (
    <div id={styles.header}>
      <div className="left-section">
        <h1>Game Name</h1>
        <p>Game description - How to play</p>
      </div>
      <div className="right-section">
        <p className="score">Score: {score}</p>
        <p className="score">Best Score: {bestScore}</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number,
};
