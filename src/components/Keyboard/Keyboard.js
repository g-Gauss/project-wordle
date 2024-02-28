import React from "react";

import styles from "./keyboard.module.css";

import Key from "../Key";

const KEYBOARD_LAYOUT = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ disabled, handleLetterClick, keyboardState }) {
  return (
    <div className={styles.keyboard}>
      {KEYBOARD_LAYOUT.map((letterRow, index) => (
        <div key={index} className={styles.keyboardRow}>
          {letterRow.map((letter) => (
            <Key
              key={letter}
              letter={letter}
              disabled={disabled}
              handleClick={handleLetterClick}
              state={keyboardState && keyboardState[letter]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
