import React from "react";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function GameOverBanner({ gameState, numOfGuesses, answer, resetGame }) {
  return (
    <>
      {gameState === "won" && (
        <WonBanner numOfGuesses={numOfGuesses} resetGame={resetGame} />
      )}
      {gameState === "lost" && (
        <LostBanner answer={answer} resetGame={resetGame} />
      )}
    </>
  );
}

export default GameOverBanner;
