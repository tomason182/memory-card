import { useEffect, useState } from "react";
import styles from "./BobsBurgerApi.module.css";

export default function BobsBurgerApi() {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bobsburgers-api.herokuapp.com/characters/1", {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }

        return response.json();
      })
      .then((data) => setImageUrl(data.image))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A Network error ocurred</p>;
  if (loading) return <p>Loading Images...</p>;
  return (
    <>{imageUrl && <img className={styles.img} src={imageUrl} alt="" />}</>
  );
}
