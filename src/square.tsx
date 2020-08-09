import React, { useState } from "react";

type SquareProps = {
  value: string;
  onClick: () => void;
};

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="square"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
};
