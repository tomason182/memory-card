import { useState } from "react";

export default function Card(card) {
  const [wasClicked, setWasClicked] = useState(false);

  return (
    <div
      className={`card ${wasClicked && "clicked"}`}
      onClick={() => {
        setWasClicked(!wasClicked);
      }}
    >
      <div className="image">
        <img src={card.imageUrl} alt={card.title} />
      </div>
      <div className="description">
        <span>{card.title}</span>
      </div>
    </div>
  );
}
