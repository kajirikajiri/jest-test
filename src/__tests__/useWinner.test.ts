import { renderHook } from "@testing-library/react-hooks";
import { useWinner } from "../useWinner";
import { NextPlayer } from "../nextPlayerTypes";

test("test", () => {
  let arg: NextPlayer[] = ["O", "O", "O"];
  const { result, rerender } = renderHook(() => useWinner(arg));
  expect(result.current).toBe(true);

  arg = ["X", "X", "X"];
  rerender();
  expect(result.current).toBe(true);

  arg = [""];
  rerender();
  expect(result.current).toBe(false);
});
