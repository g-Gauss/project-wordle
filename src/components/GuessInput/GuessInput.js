import React from "react";

const MAX_CHARACTERS = 5;

function GuessInput({ guess, setGuess }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern={`[A-Za-z]{${MAX_CHARACTERS}}`}
        title={`Your answer must contain ${MAX_CHARACTERS} characters`}
        maxLength={MAX_CHARACTERS}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
