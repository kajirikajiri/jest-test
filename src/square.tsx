import * as React from "react";

interface SquareProps {
  value: string;
}

interface SquareState {
  value: string;
}

export class Square extends React.Component<SquareProps, SquareState> {
  static defaultProps: SquareProps = {
    value: "",
  };

  constructor(props: SquareProps) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}
