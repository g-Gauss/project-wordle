import React from "react";

import styles from "./key.module.css";

function Key({ letter, handleClick, disabled, state }) {
  return (
    <button
      className={`${styles.key} ${styles[state]}`}
      onClick={() => handleClick(letter)}
      disabled={disabled}
    >
      {letter}
    </button>
  );
}

export default Key;
