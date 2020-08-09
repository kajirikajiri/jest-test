import React, { useState } from "react";

type SquareProps = {
  value: string;
};

export const Square: React.FC<SquareProps> = ({ value }) => {
  return (
    <button className="square" onClick={() => {}}>
      {value}
    </button>
  );
};
