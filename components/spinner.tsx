import { Component } from "react";

export class Spinner extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      color: props.color || "primary",
      type: props.type || "border",
    };

    this.colors = {
      primary: "spinner-primary",
      secondary: "spinner-secondary",
      info: "spinner-info",
      success: "spinner-success",
      warning: "spinner-warning",
      danger: "spinner-danger",
      light: "spinner-light",
      dark: "spinner-dark",
    };

    this.types = {
      border: "spinner-border",
      circle: "spinner-circle",
      filled: "spinner-filled",
      gradient: "spinner-gradient",
    };
  }

  componentDidMount() {
    if (this.state.color) {
      this.setState({ color: this.colors[this.state.color] });
    }

    if (this.state.type) {
      this.setState({ type: this.types[this.state.type] });
    }
  }

  render() {
    return (
      <span className={"spinner-container"}>
        <span
          role={"status"}
          title={"Loading"}
          className={`spinner ${this.state.color} ${this.state.type} ${
            this.props.className || ""
          }`}
        >
          {this.props.children}
        </span>
      </span>
    );
  }
}
