import BobsBurgerApi from "../api/BobsBurgerApi";
import style from "./Content.module.css";

export default function Content() {
  const characters = [...Array(10).keys()].map((i) => i + 1);

  const randomCharacters = characters.sort((a, b) => 0.5 - Math.random());

  return (
    <div className={style.content}>
      {randomCharacters.map((character) => (
        <BobsBurgerApi key={character} character={character} />
      ))}
    </div>
  );
}
