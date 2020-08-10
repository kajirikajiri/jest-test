import React from "react";
import { NextPlayer } from "./nextPlayerTypes";

export const genMoves = (
  changeHistory: (i: number) => void,
  history: NextPlayer[][]
): JSX.Element[] => {
  return history.map((_, move: number) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            changeHistory(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });
};
