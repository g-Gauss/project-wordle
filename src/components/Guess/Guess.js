import React from "react";
import { range } from "../../utils";
import { MAX_CHARACTERS } from "../../constants";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(MAX_CHARACTERS).map((index) => (
        <span key={index} className="cell">
          {word ? word[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
