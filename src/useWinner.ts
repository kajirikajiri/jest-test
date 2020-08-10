import { useState, useEffect } from "react";
import { calculateWinner } from "./calculateWinner";
import { NextPlayer } from "./nextPlayerTypes";

export const useWinner = (squares: NextPlayer[]) => {
  const [win, setWin] = useState<boolean>(false);
  useEffect(() => {
    const winner: NextPlayer = calculateWinner(squares);
    winner === "" ? setWin(false) : setWin(true);
  });
  return win;
};
