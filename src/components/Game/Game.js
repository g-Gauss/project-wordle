import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleGuessSubmission(tentativeGuess) {
    const nextPreviousGuesses = [...guesses, tentativeGuess];
    setGuesses(nextPreviousGuesses);

    console.log(nextPreviousGuesses);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput handleGuessSubmission={handleGuessSubmission} />
    </>
  );
}

export default Game;
