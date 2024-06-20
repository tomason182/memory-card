import BobsBurgerApi from "../api/BobsBurgerApi";

export default function Content() {
  const characters = [...Array(10).keys()].map((i) => i + 1);

  return (
    <>
      {characters.map((character) => (
        <BobsBurgerApi key={character} character={character} />
      ))}
    </>
  );
}
