import React from "react";
import { Game } from "../game";
import renderer from "react-test-renderer";

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
