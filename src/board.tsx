import React from "react";
import { Square } from "./square";
import { NextPlayer } from "./nextPlayerTypes";

type BoardProps = {
  squares: NextPlayer[];
  updateHistory: (currentHistory: NextPlayer[]) => void;
  changingHistory: boolean;
  nextPlayer: NextPlayer;
  win: boolean;
};

export const Board: React.FC<BoardProps> = ({
  nextPlayer,
  updateHistory,
  squares,
  changingHistory,
  win,
}) => {
  const handleClick = (i: number): void => {
    if (!changingHistory && (squares[i] !== "" || win)) return;

    const newSquares: NextPlayer[] = squares.slice();
    newSquares[i] = nextPlayer;
    updateHistory(newSquares);
  };

  const renderSquare = (i: number) => {
    return <Square onClick={() => handleClick(i)} value={squares[i]} />;
  };

  return (
    <div>
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
