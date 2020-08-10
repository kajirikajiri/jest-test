import React, { useState } from "react";
import { Square } from "./square";

type NextPlayer = "X" | "O" | "";

export const Board: React.FC = () => {
  const [squares, setSquares] = useState<NextPlayer[]>(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [win, setWin] = useState<boolean>(false);

  const nextPlayer = (xIsNext: boolean): NextPlayer => (xIsNext ? "X" : "O");

  const handleClick = (i: number): void => {
    if (squares[i] !== "" || win) return;

    const newSquares: NextPlayer[] = squares.slice();
    newSquares[i] = nextPlayer(xIsNext);
    setSquares(newSquares);

    const winner: NextPlayer = calculateWinner(newSquares);

    if (winner === "") {
      setXIsNext(!xIsNext);
    } else {
      setWin(true);
    }
  };

  function calculateWinner(squares: NextPlayer[]): NextPlayer {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return "";
  }

  const renderSquare = (i: number) => {
    return <Square onClick={() => handleClick(i)} value={squares[i]} />;
  };

  const status: String =
    (win ? "winner: " : "Next player: ") + nextPlayer(xIsNext);

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
