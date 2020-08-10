import React from "react";
import { genMoves } from "../genMoves";
import { NextPlayer } from "../nextPlayerTypes";

test("genMoves", () => {
  const setHistoryIndex = (i: number) => {};
  const history: NextPlayer[][] = [[], [], [], [], [], [], [], [], [], []];
  const components = genMoves(setHistoryIndex, history);
  expect(components[0].props.children.props.children).toEqual(
    "Go to game start"
  );
  expect(components[1].props.children.props.children).toEqual("Go to move #1");
  expect(components[9].props.children.props.children).toEqual("Go to move #9");
  const tree = JSON.stringify(components);
  expect(tree).toMatchSnapshot();
});
