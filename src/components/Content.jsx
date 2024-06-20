import BobsBurgerApi from "../api/BobsBurgerApi";
import style from "./Content.module.css";

export default function Content({ wasClicked, setWasClicked }) {
  const characters = [...Array(10).keys()].map((i) => i + 1);

  const randomCharacters = characters.sort((a, b) => 0.5 - Math.random());

  return (
    <div className={style.content}>
      {randomCharacters.map((character) => (
        <BobsBurgerApi
          key={character}
          character={character}
          wasClicked={wasClicked}
          setWasClicked={setWasClicked}
        />
      ))}
    </div>
  );
}
