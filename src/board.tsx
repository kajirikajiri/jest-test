import React, { useState } from "react";
import { Square } from "./square";
import { NextPlayer } from "./nextPlayerTypes";

type BoardProps = {
  squares: NextPlayer[];
  updateHistory: (currentHistory: NextPlayer[]) => void;
  changingHistory: boolean;
  xIsNext: boolean;
  win: boolean;
};

export const Board: React.FC<BoardProps> = ({
  xIsNext,
  updateHistory,
  squares,
  changingHistory,
  win,
}) => {
  const nextPlayer = (xIsNext: boolean): NextPlayer => (xIsNext ? "X" : "O");
  const winner = (xIsNext: boolean): NextPlayer => (xIsNext ? "O" : "X");

  const handleClick = (i: number): void => {
    if (!changingHistory && (squares[i] !== "" || win)) return;

    const newSquares: NextPlayer[] = squares.slice();
    newSquares[i] = nextPlayer(xIsNext);
    updateHistory(newSquares);
  };

  const renderSquare = (i: number) => {
    return <Square onClick={() => handleClick(i)} value={squares[i]} />;
  };

  const status: String = win
    ? "winner: " + winner(xIsNext)
    : "Next player: " + nextPlayer(xIsNext);

  return (
    <div>
      <div className="status" data-test="gameStatus">
        {status}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
