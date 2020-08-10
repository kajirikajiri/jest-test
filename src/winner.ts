import { NextPlayer } from "./nextPlayerTypes";

export const winner = (xIsNext: boolean): NextPlayer => (xIsNext ? "O" : "X");
