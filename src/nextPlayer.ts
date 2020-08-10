import { NextPlayer } from "./nextPlayerTypes";

export const nextPlayer = (xIsNext: boolean): NextPlayer =>
  xIsNext ? "X" : "O";
