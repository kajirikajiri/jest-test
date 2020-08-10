import { renderHook } from "@testing-library/react-hooks";
import { useXIsNext } from "../useXIsNext";

test("test", () => {
  let arg = 0;
  const { result, rerender } = renderHook(() => useXIsNext(arg));
  expect(result.current).toBe(true);

  arg = 1;
  rerender();
  expect(result.current).toBe(false);
});
