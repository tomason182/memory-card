import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [wasClicked, setWasClicked] = useState(false);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Content wasClicked={wasClicked} setWasClicked={setWasClicked} />
    </>
  );
}
