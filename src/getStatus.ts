import { NextPlayer } from "./nextPlayerTypes";

const winner = (xIsNext: boolean): NextPlayer => (xIsNext ? "O" : "X");
export const nextPlayer = (xIsNext: boolean): NextPlayer =>
  xIsNext ? "X" : "O";
export const getStatus = (win: boolean, xIsNext: boolean): string =>
  win ? "winner: " + winner(xIsNext) : "Next player: " + nextPlayer(xIsNext);
