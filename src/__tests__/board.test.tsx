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

test("click square button element then change innerHTML blank to X, next change blank to O", () => {
  act(() => {
    ReactDOM.render(<Board />, container);
  });
  const button = container.querySelectorAll(".square");
  act(() => {
    button[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(button[0].innerHTML).toEqual("X");
  act(() => {
    button[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(button[1].innerHTML).toEqual("O");
});

test("click square button element then change innerHTML blank to X, next click same elements then X not change", () => {
  act(() => {
    ReactDOM.render(<Board />, container);
  });
  const button = container.querySelectorAll(".square");
  act(() => {
    button[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(button[0].innerHTML).toEqual("X");
  act(() => {
    button[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(button[0].innerHTML).toEqual("X");
});
