import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState("inProgress");

  console.info({ answer });

  function handleGuessSubmission(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameState("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  }

  function resetGame() {
    setGuesses([]);
    setGameState("inProgress");
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput
        handleGuessSubmission={handleGuessSubmission}
        gameState={gameState}
      />
      <GameOverBanner
        gameState={gameState}
        numOfGuesses={guesses.length}
        answer={answer}
        resetGame={resetGame}
      />
    </>
  );
}

export default Game;
