import * as React from "react";

interface SquareProps {
  value: number;
}

export class Square extends React.Component<SquareProps> {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
