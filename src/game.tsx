import React, { useState, useEffect } from "react";
import { Board } from "./board";
import { NextPlayer } from "./nextPlayerTypes";
import { calculateWinner } from "./calculateWinner";

export const Game: React.FC = () => {
  const [history, setHistory] = useState<NextPlayer[][]>([Array(9).fill("")]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [changingHistory, setChangingHistory] = useState<boolean>(false);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    const newXIsNext = historyIndex % 2 === 0;
    setXIsNext(newXIsNext);

    const winner: NextPlayer = calculateWinner(history[historyIndex]);
    winner === "" ? setWin(false) : setWin(true);
  });

  const updateHistory = (currentHistory: NextPlayer[]) => {
    const newHistory: NextPlayer[][] = history.slice();
    const newHistoryIndex = historyIndex + 1;
    newHistory[newHistoryIndex] = currentHistory;
    for (let i = newHistoryIndex + 1; i < 10; i++) {
      delete newHistory[i];
    }
    setHistory(newHistory);
    setHistoryIndex(newHistoryIndex);
    setChangingHistory(false);
  };

  const changeFuture = (i: number) => {
    setHistoryIndex(i);
    setChangingHistory(true);
  };

  const moves = history.map((_, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            changeFuture(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          win={win}
          xIsNext={xIsNext}
          changingHistory={changingHistory}
          squares={history[historyIndex]}
          updateHistory={updateHistory}
        />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
