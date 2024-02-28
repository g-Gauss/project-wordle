import React from "react";
import Banner from "../Banner";
import Button from "../Button";

function WonBanner({ numOfGuesses, resetGame }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{`${numOfGuesses} guess${
          numOfGuesses > 1 ? "es" : ""
        }`}</strong>
      </p>
      <Button onClick={resetGame}>Restart Game</Button>
    </Banner>
  );
}

export default WonBanner;
