import React, { useState } from "react";
import { Board } from "./board";
import { NextPlayer } from "./nextPlayerTypes";
import { useXIsNext } from "./useXIsNext";
import { useWinner } from "./useWinner";

export const Game: React.FC = () => {
  const [history, setHistory] = useState<NextPlayer[][]>([Array(9).fill("")]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [changingHistory, setChangingHistory] = useState<boolean>(false);

  const xIsNext: boolean = useXIsNext(historyIndex);
  const win: boolean = useWinner(history[historyIndex]);

  const updateHistory = (squares: NextPlayer[]) => {
    const newHistory: NextPlayer[][] = history.slice();
    const newHistoryIndex = historyIndex + 1;
    newHistory[newHistoryIndex] = squares;
    for (let i = newHistoryIndex + 1; i < 10; i++) {
      delete newHistory[i];
    }
    setHistory(newHistory);
    setHistoryIndex(newHistoryIndex);
    setChangingHistory(false);
  };

  const changeHistory = (i: number) => {
    setHistoryIndex(i);
    setChangingHistory(true);
  };

  const nextPlayer = (xIsNext: boolean): NextPlayer => (xIsNext ? "X" : "O");
  const winner = (xIsNext: boolean): NextPlayer => (xIsNext ? "O" : "X");

  const status: String = win
    ? "winner: " + winner(xIsNext)
    : "Next player: " + nextPlayer(xIsNext);

  const moves = history.map((_, move: number) => {
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

  return (
    <div className="game">
      <div className="game-board">
        <Board
          win={win}
          nextPlayer={nextPlayer(xIsNext)}
          changingHistory={changingHistory}
          squares={history[historyIndex]}
          updateHistory={updateHistory}
        />
      </div>
      <div className="game-info">
        <div className="status" data-test="gameStatus">
          {status}
        </div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
