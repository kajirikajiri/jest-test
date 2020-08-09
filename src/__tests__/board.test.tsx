import React from "react";
import { Board } from "../board";
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

test("Board class", () => {
  const component = renderer.create(<Board />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("click square button element then change innerHTML blank to X", () => {
  act(() => {
    ReactDOM.render(<Board />, container);
  });
  const button = container.querySelector(".square");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(button.innerHTML).toEqual("X");
});
