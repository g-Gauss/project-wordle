import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState("inProgress");

  function handleGuessSubmission(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameState("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
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
      />
    </>
  );
}

export default Game;
