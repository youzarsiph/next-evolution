import { Component } from "react";

export class Skeleton extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      type: props.type || "square",
    };

    this.types = {
      text: "skeleton-text",
      circle: "skeleton-circle",
      square: "skeleton-square",
    };
  }

  componentDidMount() {
    if (this.state.type) {
      this.setState({ type: this.types[this.state.type] });
    }
  }

  render() {
    return (
      <span
        role={"status"}
        title={"Loading"}
        className={`skeleton ${this.state.type} ${this.props.className || ""}`}
      />
    );
  }
}
