import React, { useState } from "react";
import { MAX_CHARACTERS } from "../../constants";
import Keyboard from "../Keyboard/Keyboard";

function GuessInput({ handleGuessSubmission, gameState, keyboardState }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function appendLetterToGuess(letter) {
    setTentativeGuess((currentTentativeGuess) => {
      if (currentTentativeGuess.length >= MAX_CHARACTERS) {
        return currentTentativeGuess;
      }
      return currentTentativeGuess + letter;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleGuessSubmission(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          pattern={`[A-Za-z]{${MAX_CHARACTERS}}`}
          title={`Your answer must contain ${MAX_CHARACTERS} characters`}
          maxLength={MAX_CHARACTERS}
          value={tentativeGuess}
          onChange={(event) =>
            setTentativeGuess(event.target.value.toUpperCase())
          }
          disabled={gameState !== "inProgress"}
        />
      </form>
      <Keyboard
        disabled={gameState !== "inProgress"}
        handleLetterClick={appendLetterToGuess}
        keyboardState={keyboardState}
      />
    </>
  );
}

export default GuessInput;
