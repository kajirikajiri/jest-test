import { renderHook } from "@testing-library/react-hooks";
import { getStatus } from "../getStatus";

test("test", () => {
  let win = false;
  let xIsNext = false;
  const { result, rerender } = renderHook(() => getStatus(win, xIsNext));
  expect(result.current).toBe("Next player: O");

  xIsNext = true;
  win = false;
  rerender();
  expect(result.current).toBe("Next player: X");

  xIsNext = false;
  win = true;
  rerender();
  expect(result.current).toBe("winner: X");

  xIsNext = true;
  win = true;
  rerender();
  expect(result.current).toBe("winner: O");
});
