import { useState, useEffect } from "react";
import BobsBurgerApi from "../api/BobsBurgerApi";
import style from "./Content.module.css";

export default function Content({ setScore, setBestScore }) {
  const [characters, setCharacters] = useState(
    [...Array(10).keys()].map((i) => i + 1)
  );
  const [clickedState, setClickedState] = useState({});

  useEffect(() => {
    setCharacters((prev) => prev.sort((a, b) => 0.5 - Math.random()));
  }, [clickedState]);

  const handleCardClicks = (char) => {
    if (!clickedState[char]) {
      setClickedState((prev) => ({ ...prev, [char]: true }));
      setScore((prev) => prev + 1);
    } else {
      setBestScore((prev) => Math.max(prev, score));
      setScore(0);
      setClickedState({});
    }
  };

  return (
    <div className={style.content}>
      {characters.map((character) => (
        <BobsBurgerApi
          key={character}
          character={character}
          wasClicked={!!clickedState[character]}
          handleCardClicks={() => handleCardClicks(character)}
        />
      ))}
    </div>
  );
}
