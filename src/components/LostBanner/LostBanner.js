import React from "react";
import Banner from "../Banner";
import Button from "../Button";

function LostBanner({ answer, resetGame }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
      <Button onClick={resetGame}>Restart Game</Button>
    </Banner>
  );
}

export default LostBanner;
