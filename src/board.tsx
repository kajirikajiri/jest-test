import React, { useState } from "react";
import { Square } from "./square";

export const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);

  const nextPlayer = (xIsNext: boolean): String => (xIsNext ? "X" : "O");

  const handleClick = (i: number): void => {
    if (squares[i] !== "") return;
    const newSquares = squares.slice();
    newSquares[i] = nextPlayer(xIsNext);
    setSquares(newSquares);

    setXIsNext(!xIsNext);
  };

  const renderSquare = (i: number) => {
    return <Square onClick={() => handleClick(i)} value={squares[i]} />;
  };

  const status: String = "Next player: " + nextPlayer(xIsNext);

  return (
    <div>
      <div className="status">{status}</div>
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
