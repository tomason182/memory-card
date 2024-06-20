import styles from "./Header.module.css";

export default function Header() {
  return (
    <div id={styles.header}>
      <div className="left-section">
        <h1>Game Name</h1>
        <p>Game description - How to play</p>
      </div>
      <div className="right-section">
        <p className="score">Score: xxx</p>
        <p className="score">Best Score: xxx</p>
      </div>
    </div>
  );
}
