import React from "react";
import { Square } from "./square";
import { NextPlayer } from "./nextPlayerTypes";

type BoardProps = {
  squares: NextPlayer[];
  handleClick: (i: number) => void;
};

export const Board: React.FC<BoardProps> = ({ squares, handleClick }) => {
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
