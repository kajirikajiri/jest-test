import { calculateWinner } from "../calculateWinner";
import { NextPlayer } from "../nextPlayerTypes";

test("test", () => {
  let arg: NextPlayer[] = ["O", "O", "O"];
  let result: NextPlayer = calculateWinner(arg);
  expect(result).toBe("O");

  arg = ["X", "X", "X"];
  result = calculateWinner(arg);
  expect(result).toBe("X");

  arg = [""];
  result = calculateWinner(arg);
  expect(result).toBe("");
});
