import React, { useState } from "react";
import { Board } from "./board";
import { NextPlayer } from "./nextPlayerTypes";
import { useXIsNext } from "./useXIsNext";
import { useWinner } from "./useWinner";
import { genMoves } from "./genMoves";
import { nextPlayer } from "./nextPlayer";
import { winner } from "./winner";

export const Game: React.FC = () => {
  const [history, setHistory] = useState<NextPlayer[][]>([Array(9).fill("")]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [changingHistory, setChangingHistory] = useState<boolean>(false);

  const xIsNext: boolean = useXIsNext(historyIndex);
  const win: boolean = useWinner(history[historyIndex]);

  const updateHistory = (squares: NextPlayer[]) => {
    setChangingHistory(false);

    const newHistoryIndex = historyIndex + 1;
    setHistoryIndex(newHistoryIndex);

    const newHistory: NextPlayer[][] = history.slice();
    newHistory[newHistoryIndex] = squares;
    for (let i = newHistoryIndex + 1; i < 10; i++) {
      delete newHistory[i];
    }
    setHistory(newHistory);
  };

  const changeHistory = (i: number) => {
    setHistoryIndex(i);
    setChangingHistory(true);
  };

  const status: String = win
    ? "winner: " + winner(xIsNext)
    : "Next player: " + nextPlayer(xIsNext);

  const moves = genMoves(changeHistory, history);

  const handleClick = (i: number): void => {
    if (!changingHistory && (history[historyIndex][i] !== "" || win)) return;

    const newSquares: NextPlayer[] = history[historyIndex].slice();
    newSquares[i] = nextPlayer(xIsNext);
    updateHistory(newSquares);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board handleClick={handleClick} squares={history[historyIndex]} />
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
