import React from "react";
import { Square } from "../square";
import renderer from "react-test-renderer";

test("Square class", () => {
  const component = renderer.create(<Square onClick={() => {}} value={"1"} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
