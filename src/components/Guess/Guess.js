import React from "react";
import { range } from "../../utils";
import { MAX_CHARACTERS } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(MAX_CHARACTERS).map((index) => (
        <span
          key={index}
          className={`cell ${result ? result[index]?.status : ""}`}
        >
          {result ? result[index].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
