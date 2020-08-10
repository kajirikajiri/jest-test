import React from "react";
import { Board } from "../board";
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

test("Board class", () => {
  const component = renderer.create(
    <Board squares={[""]} handleClick={() => {}} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
