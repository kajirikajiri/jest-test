import React, { useState } from "react";
import { Board } from "./board";
import { NextPlayer } from "./nextPlayerTypes";
import { useXIsNext } from "./useXIsNext";
import { useWinner } from "./useWinner";
import { genMoves } from "./genMoves";
import { getStatus, nextPlayer } from "./getStatus";

export const Game: React.FC = () => {
  const [history, setHistory] = useState<NextPlayer[][]>([Array(9).fill("")]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const squares: NextPlayer[] = history[historyIndex];
  const xIsNext: boolean = useXIsNext(historyIndex);
  const win: boolean = useWinner(squares);
  const status: String = getStatus(win, xIsNext);
  const moves = genMoves(setHistoryIndex, history);

  const updateHistory = (squares: NextPlayer[]) => {
    const newHistoryIndex = historyIndex + 1;
    setHistoryIndex(newHistoryIndex);

    const newHistory: NextPlayer[][] = history.slice();
    newHistory[newHistoryIndex] = squares;
    for (let i = newHistoryIndex + 1; i < 10; i++) {
      delete newHistory[i];
    }
    setHistory(newHistory);
  };

  const handleClick = (i: number): void => {
    if (squares[i] !== "" || win) return;

    const newSquares: NextPlayer[] = squares.slice();
    newSquares[i] = nextPlayer(xIsNext);
    updateHistory(newSquares);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board handleClick={handleClick} squares={squares} />
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
