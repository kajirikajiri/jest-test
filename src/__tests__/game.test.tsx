import React from "react";
import { Game } from "../game";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

let container!: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("Game class", () => {
  const component = renderer.create(<Game />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// test("win: true, xIsNext: true -> winner: O", () => {
//   act(() => {
//     ReactDOM.render(
//       <Game />,
//       container
//     );
//   });
//   const status = container.querySelector("[data-test=gameStatus]");
//   expect(status.innerHTML).toEqual("Next player: X");
//   const buttons = container.querySelectorAll("[data-test=square]")
//   debugger
//   act(() => {
//     buttons[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     buttons[3].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     buttons[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     buttons[4].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     buttons[2].dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   })
//   debugger
//   expect(status.innerHTML).toEqual("winner: X");
// });
