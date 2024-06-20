import { useState } from "react";
import style from "./Card.module.css";
import PropTypes from "prop-types";

export default function Card({ data }) {
  const [wasClicked, setWasClicked] = useState(false);

  return (
    <div
      className={`${style.card}  ${wasClicked ? "clicked" : ""}`}
      onClick={() => {
        setWasClicked(!wasClicked);
      }}
    >
      <div className="image">
        <img className={style.img} src={data.image} alt={data.name} />
      </div>
      <div className="description">
        <span>{data.name}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};
