import { useEffect, useState } from "react";
import styles from "./BobsBurgerApi.module.css";
import PropTypes from "prop-types";

export default function BobsBurgerApi({ character }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const characterImage = data && data.image;
  const characterName = data && data.name;

  useEffect(() => {
    fetch(`https://bobsburgers-api.herokuapp.com/characters/${character}`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }

        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [character]);

  if (error) return <p>A Network error occurred</p>;
  if (loading) return <p>Loading Images...</p>;
  return (
    <>
      {data && (
        <img className={styles.img} src={characterImage} alt={characterName} />
      )}
      {data && <h4>{characterName}</h4>}
    </>
  );
}

BobsBurgerApi.propTypes = {
  character: PropTypes.number,
};
