import React from "react";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function GameOverBanner({ gameState, numOfGuesses, answer }) {
  return (
    <>
      {gameState === "won" && <WonBanner numOfGuesses={numOfGuesses} />}
      {gameState === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default GameOverBanner;
