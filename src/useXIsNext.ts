import { useState, useEffect } from "react";

export const useXIsNext = (historyIndex: number): boolean => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  useEffect(() => {
    const newXIsNext = historyIndex % 2 === 0;
    setXIsNext(newXIsNext);
  });
  return xIsNext;
};
