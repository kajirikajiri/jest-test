import React from "react";
import { Board } from "../board";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { NextPlayer } from "../nextPlayerTypes";

let container!: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("Board class", () => {
  const component = renderer.create(
    <Board
      squares={[""]}
      updateHistory={() => {}}
      changingHistory={false}
      win={false}
      xIsNext={true}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("win: true, xIsNext: true -> winner: O", () => {
  act(() => {
    ReactDOM.render(
      <Board
        squares={[""]}
        updateHistory={() => {}}
        changingHistory={false}
        win={true}
        xIsNext={true}
      />,
      container
    );
  });
  const status = container.querySelector("[data-test=gameStatus]");
  expect(status.innerHTML).toEqual("winner: O");
});

test("win: true, xIsNext: false -> winner: X", () => {
  act(() => {
    ReactDOM.render(
      <Board
        squares={[""]}
        updateHistory={() => {}}
        changingHistory={false}
        win={true}
        xIsNext={false}
      />,
      container
    );
  });
  const status = container.querySelector("[data-test=gameStatus]");
  expect(status.innerHTML).toEqual("winner: X");
});

test("win: false, xIsNext: true -> Next player: X", () => {
  act(() => {
    ReactDOM.render(
      <Board
        squares={[""]}
        updateHistory={() => {}}
        changingHistory={false}
        win={false}
        xIsNext={true}
      />,
      container
    );
  });
  const status = container.querySelector("[data-test=gameStatus]");
  expect(status.innerHTML).toEqual("Next player: X");
});

test("win: false, xIsNext: false -> Next player: O", () => {
  act(() => {
    ReactDOM.render(
      <Board
        squares={[""]}
        updateHistory={() => {}}
        changingHistory={false}
        win={false}
        xIsNext={false}
      />,
      container
    );
  });
  const status = container.querySelector("[data-test=gameStatus]");
  expect(status.innerHTML).toEqual("Next player: O");
});

// test("click square button element then change innerHTML blank to X, next change blank to O", () => {
//   act(() => {
//     ReactDOM.render(<Board />, container);
//   });
//   const button = container.querySelectorAll("[data-test=square]");
//   act(() => {
//     button[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   expect(button[0].innerHTML).toEqual("X");
//   act(() => {
//     button[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   expect(button[1].innerHTML).toEqual("O");
// });

// test("click square button element then change innerHTML blank to X, next click same elements then X not change", () => {
//   act(() => {
//     ReactDOM.render(<Board />, container);
//   });
//   const button = container.querySelectorAll("[data-test=square]");
//   act(() => {
//     button[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   expect(button[0].innerHTML).toEqual("X");
//   act(() => {
//     button[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   expect(button[0].innerHTML).toEqual("X");
// });

// test("show winner states", () => {
//   act(() => {
//     ReactDOM.render(<Board />, container);
//   });
//   const button = container.querySelectorAll("[data-test=square]");
//   act(() => {
//     button[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   act(() => {
//     button[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   act(() => {
//     button[3].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   act(() => {
//     button[2].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   act(() => {
//     button[6].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   const status = container.querySelector("[data-test=gameStatus]");
//   expect(status.innerHTML).toEqual("winner: X");
// });
