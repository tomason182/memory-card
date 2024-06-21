import { useEffect, useState } from "react";
import Card from "../components/Card";
import PropTypes from "prop-types";

export default function BobsBurgerApi({
  character,
  wasClicked,
  handleCardClicks,
}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <Card
          data={data}
          wasClicked={wasClicked}
          handleCardClicks={handleCardClicks}
        />
      )}
    </>
  );
}

BobsBurgerApi.propTypes = {
  character: PropTypes.number.isRequired,
  wasClicked: PropTypes.bool.isRequired,
  handleCardClicks: PropTypes.func.isRequired,
};
